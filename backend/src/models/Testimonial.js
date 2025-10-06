import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 },
    image: { type: String, required: false },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);
