const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  appId: { type: String, unique: true },
  fullName: String,
  fatherName: String,
  dob: String,
  course: String,
  certificateType: String,
  phone: String,
  email: String,
  duration: String, // Changed back to String to store "2 months" or "8 weeks"
  durationUnit: String, // Added to store unit: "months" or "weeks"
  startDate: String,
  endDate: String,
  projectName: String,
  status: { type: String, default: "PENDING" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Application", applicationSchema);