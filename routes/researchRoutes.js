const express = require("express");
const router = express.Router();
const researchController = require("../controllers/researchController");

// upload route
router.post(
    "/upload",
    researchController.upload.single("file"),
    researchController.uploadResearchPaper
);

// public papers
router.get("/public", researchController.getPublicPapers);

module.exports = router;
