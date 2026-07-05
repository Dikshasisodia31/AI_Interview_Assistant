const express = require("express");
const router = express.Router();
const {createInterview} = require("../controllers/InterviewController");
const {generateInterviewQuestions} = require("../controllers/InterviewController");

router.post("/",createInterview);
router.post("/:id/generate",generateInterviewQuestions);

module.exports = router;