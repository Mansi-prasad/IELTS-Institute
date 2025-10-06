import nodemailer from "nodemailer";

// Create a transporter
export const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: false, 
  auth: {
    user: process.env.MAIL_USER, 
    pass: process.env.MAIL_PASS, 
  },
});

// Function to send mail
export const sendMail = async ({ to, subject, text, html }) => {
  const mailOptions = {
    from: `"IELTS Institute" <${process.env.MAIL_USER}>`,
    to,
    subject,
    text,
    html,
  };
  return transporter.sendMail(mailOptions);
};
