import express from "express";
import { getSentimentTone } from "../sentiment.js";
const router = express.Router();

router.post("/sentiment", (req, res) => {
  const { text = "" } = req.body;
  const tone = getSentimentTone(text);
  res.json({ tone });
});

export default router;
