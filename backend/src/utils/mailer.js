import nodemailer from "nodemailer";

export const createTransporter = (config) => {
  const transporter = nodemailer.createTransport({
    host: config.MAIL_HOST,
    port: Number(config.MAIL_PORT) || 587,
    secure: false,
    auth: {
      user: config.MAIL_USER,
      pass: config.MAIL_PASS,
    },
  });

  return transporter;
};

export const sendContactMail = async ({
  transporter,
  to,
  from,
  subject,
  text,
  html,
}) => {
  const mailOptions = {
    from,
    to,
    subject,
    text,
    html,
  };
  return transporter.sendMail(mailOptions);
};
