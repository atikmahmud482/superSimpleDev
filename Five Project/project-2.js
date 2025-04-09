const prompt = require("prompt-sync")();

// Reusable function to get a valid number from the user
function getValidNumber(label) {
  while (true) {
    const input = parseFloat(prompt(`Enter ${label}: `));
    if (isNaN(input)) {
      console.log("Please enter a valid number.");
    } else {
      return input;
    }
  }
}

const number1 = getValidNumber("Number 1");
const number2 = getValidNumber("Number 2");
const operator = prompt("Enter operator (+, -, *, /): ");

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
    if (number2 !== 0) {
      result = number1 / number2;
    } else {
      console.log("Error: Cannot divide by zero.");
      valid = false;
    }
    break;
  default:
    console.log("Invalid operator. Please use +, -, * or /.");
    valid = false;
    break;
}

if (valid) {
  console.log(`${number1} ${operator} ${number2} = ${result}`);
}
