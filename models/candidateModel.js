const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  shift: { type: String, default: "Morning" },
  siteType: { type: String, default: "normal" },
  fee: { type: Number, required: true },
  mobile: { type: String, required: true },
  siteNumber: { type: String, required: true },
  inTime: { type: String, default: "09:00 AM" },
  outTime: { type: String, default: "05:00 PM" },
  payment: { type: String, default: "unpaid" }
}, { timestamps: true });

module.exports = mongoose.model("Candidate", candidateSchema);