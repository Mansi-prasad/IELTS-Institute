import Feature from "../models/Feature.js";

export const getAllFeature = async (req, res) => {
  try {
    const features = await Feature.find().sort({ order: 1 });
    res.json(features);
  } catch (err) {
    console.log("ERROR! to get all features,", err.message);
    res.status(500).json({ message: "Server Error!" });
  }
};

// for admin only
export const createFeature = async (req, res) => {
  try {
    const { title, desc, icon, order } = req.body;
    const f = new Feature({ title, desc, icon, order });
    await f.save();
    res.status(201).json(f);
  } catch (err) {
    console.log("ERROR! to create feature,", err.message);
    res.status(500).json({ message: "Server Error!" });
  }
};

export const updateFeature = async (req, res) => {
  try {
    const { id } = req.params;
    const f = await Feature.findByIdAndUpdate(id, req.body, { new: true });
    if (!f) return res.status(404).json({ message: "Not found" });
    res.json(f);
  } catch (err) {
    console.log("ERROR! to update feature,", err.message);
    res.status(500).json({ message: "Server Error!" });
  }
};

export const deleteFeature = async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await Feature.findByIdAndDelete(id);
    if (!removed) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    console.log("ERROR! to delete feature,", err.message);
    res.status(500).json({ message: "Server Error!" });
  }
};
