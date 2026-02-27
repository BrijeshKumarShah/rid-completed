const Candidate = require("../models/candidateModel");

// CREATE
exports.createCandidate = async (req, res) => {
  try {
    let {
      name,
      date,
      shift,
      siteType,
      fee,
      mobile,
      siteNumber,
      inTime,
      outTime,
      payment
    } = req.body;

    if (!name || !date || !fee || !mobile || !siteNumber) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields"
      });
    }

    const newCandidate = await Candidate.create({
      name: name.trim(),
      date: new Date(date),
      shift,
      siteType,
      fee: Number(fee),
      mobile: mobile.trim(),
      siteNumber: siteNumber.toString(),
      inTime,
      outTime,
      payment
    });

    res.status(201).json({
      success: true,
      message: "Seat Created Successfully",
      data: newCandidate
    });

  } catch (error) {
    console.error("CREATE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET ALL
exports.getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: candidates
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// DELETE
exports.deleteCandidate = async (req, res) => {
  try {
    await Candidate.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Seat deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// UPDATE PAYMENT
exports.updatePayment = async (req, res) => {
  try {
    const { payment } = req.body;

    if (!payment) {
      return res.status(400).json({
        success: false,
        message: "Payment status required"
      });
    }

    const updated = await Candidate.findByIdAndUpdate(
      req.params.id,
      { payment },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Seat not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Payment updated successfully",
      data: updated
    });

  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

exports.deleteCandidate = async (req, res) => {
  try {
    const deleted = await Candidate.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Seat not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Seat deleted successfully"
    });

  } catch (error) {
    console.error("DELETE ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};