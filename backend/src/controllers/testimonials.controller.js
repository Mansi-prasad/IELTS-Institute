import Testimonial from "../models/Testimonial.js";
export const getAllTesti = async (req, res) => {
  try {
    const testimonials = await Testimonial.find()
      .sort({ createdAt: -1 })
      .limit(50);
    res.json(testimonials);
  } catch (err) {
    console.log("ERROR! to get Tesimonials: ", err.message);
    res.status(500).json({ message: "Server Error!" });
  }
};

export const createTesti = async (req, res) => {
  try {
    const { name, review, rating } = req.body;
    const t = new Testimonial({ name, review, rating });
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
    if (!removed) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    console.log("ERROR! to delete Tesimonial: ", err.message);
    res.status(500).json({ message: "Server Error!" });
  }
};
