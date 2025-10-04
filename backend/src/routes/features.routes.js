import express from "express";
const router = express.Router();
import { getAllFeature } from "../controllers/features.controller.js";

// Public
router.get("/", getAllFeature);

export default router;
