import Contact from "../models/contact.js";

export const addContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ success: true, contact });
  } catch (error) {
    console.log("ERROR! to add contact", error.message);
    res.status(500).json({ message: "Server Error!" });
  }
};
