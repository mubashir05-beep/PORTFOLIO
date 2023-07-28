import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL, // Replace 'EMAIL_USERNAME' with the correct environment variable name for your email username
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS, // Replace 'EMAIL_PASSWORD' with the correct environment variable name for your email password
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.NEXT_PUBLIC_GMAIL, // Replace 'EMAIL_USERNAME' with the correct environment variable name for your email username
      to: 'contact.muhammadmubashir@gmail.com', // Replace 'EMAIL_USERNAME' with the correct environment variable name for your email username
      // cc: email, (uncomment this line if you want to send a copy to the sender)
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Email sent');
          } else {
            reject(err.message);
          }
        });
      });

    await sendMailPromise();

    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
