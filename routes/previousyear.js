const express = require("express");
const router = express.Router();
const previousController = require("../controllers/previousyear");
const authenticateJWT = require("../middleware/authMiddleware");
const multer = require("multer");

// Storage Config
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage });

// ================= ROUTES =================

router.get(
    "/previous-year-paper",
    authenticateJWT,
    previousController.renderPreviousPage
);

router.post(
    "/upload-previous-paper",
    authenticateJWT,
    upload.single("previous-file"),
    previousController.uploadPreviousPaper
);

router.get(
    "/edit-paper/:id",
    authenticateJWT,
    previousController.renderEditPage
);

router.post(
    "/edit-paper/:id",
    authenticateJWT,
    previousController.updatePaper
);

router.post(
    "/delete-paper/:id",
    authenticateJWT,
    previousController.deletePaper
);

module.exports = router;