const prompt = require("prompt-sync")();

while (true) {
  const number1 = parseFloat(prompt("Enter Number 1: "));
  if (isNaN(number1)) {
    console.log("Please enter a valid number.");
  } else {
    break;
  }
}

while (true) {
  const number2 = parseFloat(prompt("Enter Number 2: "));
  if (isNaN(number2)) {
    console.log("Please enter a valid number.");
  } else {
    break;
  }
}

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
