const express = require("express");
const router = express.Router();

const {
  createCandidate,
  getAllCandidates,
  deleteCandidate,
  updatePayment
} = require("../controllers/candidateController");

router.post("/create", createCandidate);
router.get("/all", getAllCandidates);
router.delete("/delete/:id", deleteCandidate);
router.put("/update-payment/:id", updatePayment);

module.exports = router;