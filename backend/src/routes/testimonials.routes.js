import express from "express";
const router = express.Router();

import {
  createTesti,
  deleteTesti,
  getAllTesti,
} from "../controllers/testimonials.controller.js";

import auth from "../middleware/auth.middleware.js";

// Public: get testimonials
router.get("/", getAllTesti);

router.post("/", auth, createTesti);

router.delete("/:id", auth, deleteTesti);

export default router;
