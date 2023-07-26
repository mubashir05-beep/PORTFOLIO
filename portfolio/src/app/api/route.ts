import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

const transporter =nodemailer.createTransport({
  service:'gmail',
  host:'smpt.gmail.com',
  secure: false,
  auth:{},
  });
  function generatePakistanDate(): string {
    const date = new Date();
    const offset = date.getTimezoneOffset();
    const pakistanOffset = 300; // Offset for Pakistan timezone in minutes (+5 hours * 60 minutes)
  
    // Adjust the date by adding the offset
    date.setMinutes(date.getMinutes() + offset + pakistanOffset);
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    return `${year}-${month}-${day}`;
  }
  
  const date: string = generatePakistanDate();
  

  export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
      res.status(405).json({ message: "Method Not Allowed" });
      return;
    }
    const {
      email,
      name,
      address,
      products,
      zip,
      city,
      Id,
      tlPrice,
      tlQty,
      phone,
    } = req.body;
    // Add your logic here based on the request body data
  }
  