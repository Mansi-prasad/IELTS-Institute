import mongoose from "mongoose";

const FeatureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  icon: { type: String },
});

const Feature = mongoose.model("Feature", FeatureSchema);
export default Feature;
