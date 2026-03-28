import nodemailer from 'nodemailer';
import clientPromise from '../lib/mongodb.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(400).json({ status: 'Method not allowed!' });
  }

  const {
    name,
    phone,
    package: chosenPackage,
    message,
    cf_turnstile_token,
  } = req.body;

  // Turnstile validation
  const responseToken = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET,
        response: cf_turnstile_token,
      }),
    },
  ).then((res) => res.json());

  if (!responseToken.success) {
    return res.status(400).json({ error: 'CAPTCHA verification failed!' });
  }

  const client = await clientPromise;
  const db = client.db('WebvertizeFormSubmissions');
  const collection = db.collection('Webvertize_Leads');

  // Determine the user's IP
  const forwardedFor = req.headers['x-forwarded-for'];
  // we always want to take the leftmost address
  const ip = forwardedFor
    ? forwardedFor.split(',')[0].trim()
    : req.socket?.remoteAddress;

  // Calculate the time window (per ip and form_location)
  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

  // Submission coount per IP in the last 24 hours
  const submissionsCount = await collection.countDocuments({
    ip: ip,
    createdAt: { $gte: twentyFourHoursAgo },
  });

  if (submissionsCount >= 2) {
    return res.status(429).json({ status: 'Too many requests!' });
  }

  // Validation (name and phone are mandatory)
  if (!name || !phone) {
    return res.status(400).json({ status: 'Missing required fields!' });
  }

  // 1. Send the email with collected data
  const date = new Date();
  const formattedDate = date.toLocaleString('ro-RO', {
    timeZone: 'Europe/Bucharest',
  });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `Solicitare formular landing page ${process.env.SMTP_USER}`,
    to: process.env.RECEIVING_EMAIL,
    subject: `New lead: solicitare pachet ${chosenPackage} - ${formattedDate}`,
    html: `
      <h3>Solicitare de pe /dezvoltare-web-ro cu detaliile:</h3>
      <p><strong>Nume: </strong> ${name} </p>
        <p><strong>Telefon: </strong> ${phone} </p>
        <p><strong>Pachetul de interes: </strong> ${chosenPackage} </p>
        <p><strong>Mesaj: </strong> ${message} </p>
    `,
  });

  // Insert the form submission
  const body = req.body;

  await collection.insertOne({
    ...body,
    ip: ip,
    createdAt: new Date(),
  });

  res.status(200).json({ success: true });
}
