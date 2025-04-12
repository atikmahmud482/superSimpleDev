const prompt = require("prompt-sync");
const fs = require("fs");
const { get } = require("http");

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

  const shuffled = questions.sort(() => {
    return 0.5 - Math.random();
  });
  return shuffled.slice(0, numQuestions);
}

function askQuestion(question) {
  console.log(question.question);
  for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i];
    console.log(`${i + 1}. ${option}`);
  }
  const choice = parseInt(prompt("Enter the number: "));
  if (isNaN(choice) || choice < 1 || choice > question.option.options.length) {
    console.log("Invalid Incorrect choice");
    return false;
  }
  const choiceValue = question.options[choice - 1];
  return choiceValue === question.answer;
}

const questions = loadQuestion();
const randomQuestions = getRandomQuestions(questions, 1);
const correct = askQuestion(randomQuestions[0]);
console.log(correct);
