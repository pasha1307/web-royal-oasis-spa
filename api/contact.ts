// api/contact.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
// @ts-ignore
import { Resend } from 'resend';

const resend = new Resend(process.env["RESEND_API_KEY"]!);
const TO = process.env["CONTACT_TO"]!;

// @ts-ignore
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { name, email, phone, message } = typeof req.body === 'string'
    ? JSON.parse(req.body || '{}')
    : (req.body || {});

  await resend.emails.send({
    from: 'Website <noreply@sparoyaloasis.com>',
    to: [TO],
    subject: `New inquiry from ${name || 'Website'}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
  });

  if (email) {
    await resend.emails.send({
      from: 'Royal Oasis Spa <hello@sparoyaloasis.com>',
      to: [email],
      subject: 'Thanks for reaching out',
      text: `Hi ${name || ''}, thanks for contacting Royal Oasis Spa. We’ll be in touch shortly.`
    });
  }

  res.status(200).json({ ok: true });
}
