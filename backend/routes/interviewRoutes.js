const express = require("express");
const router = express.Router();
const {createInterview} = require("../controllers/InterviewController");
const {getInterviewById} = require("../controllers/InterviewController");
const {generateInterviewQuestions} = require("../controllers/InterviewController");
const {submitInterview} = require("../controllers/InterviewController");

router.get("/:id",getInterviewById);
router.post("/",createInterview);
router.post("/:id/generate",generateInterviewQuestions);
router.put("/:id/submit",submitInterview);

module.exports = router;