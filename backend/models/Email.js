import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
  uid: { type: Number, required: true, unique: true },  // IMPORTANT
  from: String,
  subject: String,
  content: String,   // body saved here
  tone: String,
  seen: Boolean,
  time: String       // ISO date string
}, { timestamps: true });

export default mongoose.model("Email", EmailSchema);
