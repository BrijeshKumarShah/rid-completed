const mongoose = require("mongoose");

const researchPaperSchema = new mongoose.Schema({
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    journal: {
        type: String
    },
    access: {
        type: String,
        enum: ["public", "private"],
        default: "public"
    },
    fileUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("ResearchPaper", researchPaperSchema);
