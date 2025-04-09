const prompt = require("prompt-sync")();

const number1 = parseFloat(prompt("Enter Number 1: "));
const number2 = parseFloat(prompt("Enter Number 2: "));
const operator = prompt("Enter Sign: ");

let result;
let valid = true;

switch (operator) {
  case "+":
    result = number1 + number2;

    break;
  case "-":
    result = number1 - number2;

    break;
  case "*":
    result = number1 * number2;

    break;
  case "/":
    result = number1 / number2;

    break;
  default:
    console.log("Invalid operator. Please use +, -, * or /.");
    valid = false;
    break;
}

if (valid) {
  console.log(number1, operator, number2, "=", result);
}
