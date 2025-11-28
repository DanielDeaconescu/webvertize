import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  try {
    // 1. Parse the JSON
    const data = await new Promise((resolve, reject) => {
      let body = '';
      req.on('data', (chunk) => (body += chunk));
      req.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (error) {
          console.error(error);
          reject(new Error('Invalid JSON'));
        }
      });
      req.on('error', reject);
    });

    const client = await clientPromise;
    const db = client.db('WebvertizeFormSubmissions');
    const collection = db.collection('Webvertize');

    // Determine user IP (Vercel-friendly)
    const userIP =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.socket.remoteAddress;

    // Calculate the time window
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    // Count how many submissions this IP made in the last 24 hours
    const submissionsCount = await collection.countDocuments({
      ip: userIP,
      createdAt: { $gte: twentyFourHoursAgo },
    });

    if (submissionsCount >= 2) {
      return res.status(429).json({ status: 'tooManyRequests' });
    }

    // 2. Validate
    if (!data.name || !data['email'] || !data['message']) {
      return res.status(400).json({ error: 'All fields are required!' });
    }

    // Send the email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: 5000,
    });

    await transporter.sendMail({
      from: `Webvertize Form ${process.env.SMTP_USER}`,
      to: process.env.RECEIVING_EMAIL,
      subject: `Webvertize Form`,
      html: `
        <h2>Somone filled out the form on the website and here are the details:</h2>
        <p><strong>Name: </strong> ${data.name}</p>
        <p><strong>Email: </strong> ${data.email}</p>
        <p><strong>Message: </strong> ${data.message}</p>
      `,
    });

    // Insert the form submission
    const body = req.body;

    await collection.insertOne({
      ...body,
      ip: userIP,
      createdAt: new Date(),
    });

    res
      .status(200)
      .json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Server error: ', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
