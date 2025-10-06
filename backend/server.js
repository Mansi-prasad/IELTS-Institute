import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
// routes
import authRoutes from "./src/routes/auth.routes.js";
import testimonialRoutes from "./src/routes/testimonials.routes.js";
import featureRoutes from "./src/routes/features.routes.js";
import contactRoutes from "./src/routes/contact.routes.js";
const app = express();

// connect db
connectDB();

// middlewares
app.use(express.json());
app.use(cors());

// api routes
app.use("/api/auth", authRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/features", featureRoutes);
app.use("/api/contact", contactRoutes);

// health
app.get("/health", (req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
