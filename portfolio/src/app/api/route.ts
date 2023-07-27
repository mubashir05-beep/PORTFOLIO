import * as nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_GMAIL,
    pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
  },
});

interface Data {
  message?: string;
  name?: string;
  email?: string;
}

export async function POST(req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  // Check if the required fields are present in the request body
  const { name, email, message } = req.body;

  try {
    const mailOptions = {
      from: 'Client Message',
      to: 'contact.muhammadmubashir@gmail.com',
      subject: 'New Message!',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Message from Contact Form</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f2f2f2;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333; text-align: center;">New Message from Contact Form!</h2>
            <p style="font-size: 16px; color: #333;">You have received a new message from the contact form on your website. Please find the details below:</p>
            <ul style="list-style: none; padding: 0;">
              <li style="font-size: 16px; color: #333;">Name: ${name}</li>
              <li style="font-size: 16px; color: #333;">Email: ${email}</li>
              <li style="font-size: 16px; color: #333;">Message: ${message}</li>
            </ul>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
}
