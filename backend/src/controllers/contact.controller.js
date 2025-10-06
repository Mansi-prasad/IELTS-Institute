import Contact from "../models/contact.js";
import { sendMail } from "../utils/mailer.js";

export const addContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // Save contact to DB
    const contact = await Contact.create({ name, email, message });

    // Send email notification to institute
    await sendMail({
      to: process.env.CONTACT_RECEIVER, // institute's email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>`,
    });

    res.status(201).json({ success: true, contact, message: "Message sent!" });
  } catch (error) {
    console.log("ERROR! to add contact", error);
    res.status(500).json({ message: "Server Error!" });
  }
};
