import Testimonial from "../models/Testimonial.js";
export const getAllTesti = async (req, res) => {
  try {
    const testimonials = await Testimonial.find()
      .sort({ createdAt: -1 })
      .limit(50);
    res.status(200).json(testimonials);
  } catch (err) {
    console.log("ERROR! to get Tesimonials: ", err.message);
    res.status(500).json({ message: "Server Error!" });
  }
};

export const createTesti = async (req, res) => {
  try {
    const { name, message, rating, image } = req.body;
    if (!name || !message) {
      return res
        .status(400)
        .json({ message: "Name and message are required." });
    }

    const t = new Testimonial({ name, message, rating, image });
    await t.save();
    res.status(201).json(t);
  } catch (err) {
    console.log("ERROR! to create Tesimonial: ", err.message);
    res.status(500).json({ message: "Server Error!" });
  }
};

export const deleteTesti = async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await Testimonial.findByIdAndDelete(id);

    if (!removed) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.log("ERROR! to delete Tesimonial: ", err.message);
    res.status(500).json({ message: "Server Error!" });
  }
};
