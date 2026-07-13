import nodemailer from "nodemailer";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  const { name, email, phone, date, time, guests, message } =
    request.body || {};

  if (!name || !email || !phone || !date || !time || !guests) {
    return response.status(400).json({
      success: false,
      message: "Please complete all required fields.",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `Edom Restaurant <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: "New Restaurant Reservation",
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Time: ${time}
Guests: ${guests}
Special Request: ${message || "None"}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);

    return response.status(200).json({
      success: true,
      message: "Reservation sent successfully!",
    });
  } catch (error) {
    console.error("Reservation email error:", error);

    return response.status(500).json({
      success: false,
      message: "Email failed to send.",
    });
  }
}