import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import emailsRoute from "./routes/emails.js";
import sentimentRoute from "./routes/sentiment.js";
import { setupImapListener } from "./emailReceiver.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/emails", emailsRoute);
app.use("/api/sentiment", sentimentRoute);

// Health check
app.get("/", (req, res) => res.send("🚀 Backend working"));

// Start IMAP listener
setupImapListener();

// Start server
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
