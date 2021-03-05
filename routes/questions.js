const express = require("express");
const router = express.Router();
const questionController = require("../controllers/question");

router.get("/", questionController.getRandomQuestion);

// ONLY USED FOR ADDING NEW QUESTIONS (shouldn't be public)
// router.post("/", questionController.createQuestion);

module.exports = router;
