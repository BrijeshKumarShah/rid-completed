const ResearchPaper = require("../models/ResearchPaper");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// ================= MULTER SETUP =================
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = path.join(__dirname, "../uploads/research");

        // create folder if not exists
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        cb(null, dir);
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
});

exports.upload = multer({
    storage,
    limits: { fileSize: 20 * 1024 * 1024 }, // 20MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype !== "application/pdf") {
            return cb(new Error("Only PDF files allowed"), false);
        }
        cb(null, true);
    }
});

// ================= UPLOAD RESEARCH PAPER =================
exports.uploadResearchPaper = async (req, res) => {
    try {
        const { subject, title, author, year, journal, access } = req.body;

        if (!req.file) {
            return res.status(400).json({ success: false, message: "PDF required" });
        }

        const newPaper = new ResearchPaper({
            teacherId: req.teacher ? req.teacher._id : "000000000000000000000000",
            subject,
            title,
            author,
            year,
            journal,
            access,
            fileUrl: `/uploads/research/${req.file.filename}`
        });

        await newPaper.save();

        res.json({ success: true, paper: newPaper });
    } catch (err) {
        console.error("Upload error:", err);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// ================= GET TEACHER PAPERS =================
exports.getTeacherPapers = async (req, res) => {
    try {
        const papers = await ResearchPaper.find({
            teacherId: req.teacher._id
        }).sort({ createdAt: -1 });

        res.json(papers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
};

// ================= DELETE PAPER =================
exports.deletePaper = async (req, res) => {
    try {
        const paper = await ResearchPaper.findByIdAndDelete(req.params.id);

        if (!paper) {
            return res.json({ success: false });
        }

        res.json({ success: true });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
};

// ================= GET PUBLIC PAPERS =================
exports.getPublicPapers = async (req, res) => {
    try {
        const papers = await ResearchPaper.find({
            access: "public"
        }).sort({ createdAt: -1 });

        res.json(papers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false });
    }
};
