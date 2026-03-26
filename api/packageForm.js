import { createClient } from '@supabase/supabase-js/dist/index.cjs';

// create the supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(400).json({ status: 'Method not allowed!' });
  }

  const { name, phone, email, message, cf_turnstile_token } = req.body;

  // 2. Send the email with collected data

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

  // Determine the user's IP
  const forwardedFor = req.headers['x-forwarded-for'];
  // we always want to take the leftmost address
  const ip = forwardedFor
    ? forwardedFor.split(',')[0].trim()
    : req.socket?.remoteAddress;

  // 1. Insert in the "submissions" table
  const body = req.body;

  const { data, errorInsert } = await supabase
    .from('submissions')
    .insert({ ...body, ip: ip, form_location: 'prices' })
    .select();

  console.log('inserted data: ', data);

  if (errorInsert) {
    throw new Error('There was an error inserting data in Supabase!');
  }
}
