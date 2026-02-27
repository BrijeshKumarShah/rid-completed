const mongoose = require("mongoose");

const previousPaperSchema = new mongoose.Schema({
  title: String,
  file: String,
  teacherId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Teacher",
  required: true
}
}, { timestamps: true });

module.exports = mongoose.model("PreviousPaper", previousPaperSchema);




