import express from "express";
const router = express.Router();
import { addContact } from "../controllers/contact.controller.js";

router.post("/", addContact);

export default router;
