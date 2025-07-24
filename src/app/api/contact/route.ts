import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail", // or use custom SMTP
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.SMTP_EMAIL,
    subject: `New Contact Form Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to send." + error }, { status: 500 });
  }
}
