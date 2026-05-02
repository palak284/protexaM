import express from "express";
import Email from "../models/Email.js";

const router = express.Router();

// Get ALL emails, sorted latest → oldest based on UID
router.get("/recent", async (req, res) => {
  try {
    const emails = await Email.find().sort({ uid: -1 }); // FIXED!
    res.json(emails);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch emails" });
  }
});

// Create manual/sent emails
router.post("/send", async (req, res) => {
  try {
    const { from = "You", subject = "(sent)", body = "" } = req.body;

    const EmailModel = await Email.create({
      uid: Date.now(),           // Unique uid for manual emails
      from,
      subject,
      content: body,
      tone: "neutral",
      seen: true,
      time: new Date().toISOString(),
    });

    res.json({ ok: true, email: EmailModel });
  } catch (err) {
    res.status(500).json({ error: "Failed to save sent email" });
  }
});

export default router;
