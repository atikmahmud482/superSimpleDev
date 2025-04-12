const prompt = require("prompt-sync");
const fs = require("fs");

function loadQuestion() {
  try {
    const data = fs.readFileSync("project-5.json", "utf8");
    const questions = JSON.parse(data).questions;
    return questions;
  } catch (e) {
    console.log("Error occured loading file", e);
    return [];
  }
}

function getRandomQuestions(questions, numQuestions) {
  if (numQuestions > questions.length) {
    numQuestions = questions.length;
  }
}

const questions = loadQuestion();
console.log(questions);
