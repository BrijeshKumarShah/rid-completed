const PreviousPaper = require("../models/previouspaper");

// ===============================
// Render Page
// ===============================
exports.renderPreviousPage = async (req, res) => {
    try {
        const papers = await PreviousPaper.find({
            teacherId: req.user.userId
        }).sort({ createdAt: -1 });

        res.render(
            "tracher_deshboard/advance-version/Previous-year-paper/previous-year-dashboard.ejs",
            { papers }
        );

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};

// ===============================
// Upload Paper
// ===============================
exports.uploadPreviousPaper = async (req, res) => {
    try {
        const { title } = req.body;

        const newPaper = new PreviousPaper({
            title,
            file: req.file.filename,
            teacherId: req.user.userId
        });

        await newPaper.save();

        res.redirect("/previous-year-paper");

    } catch (error) {
        console.error(error);
        res.status(500).send("Upload Error");
    }
};

// ===============================
// Delete Paper
// ===============================
exports.deletePaper = async (req, res) => {
    try {
        await PreviousPaper.findOneAndDelete({
            _id: req.params.id,
            teacherId: req.user.userId
        });

        res.redirect("/previous-year-paper");

    } catch (error) {
        console.error(error);
        res.status(500).send("Delete Error");
    }
};

// ===============================
// Render Edit Page
// ===============================
exports.renderEditPage = async (req, res) => {
    try {
        const paper = await PreviousPaper.findOne({
            _id: req.params.id,
            teacherId: req.user.userId
        });

        if (!paper) {
            return res.status(403).send("Not Authorized");
        }

        res.render(
            "tracher_deshboard/advance-version/Previous-year-paper/edit.ejs",
            { paper }
        );

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};

// ===============================
// Update Paper
// ===============================
exports.updatePaper = async (req, res) => {
    try {
        const { title } = req.body;

        await PreviousPaper.findOneAndUpdate(
            {
                _id: req.params.id,
                teacherId: req.user.userId
            },
            { title }
        );

        res.redirect("/previous-year-paper");

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};