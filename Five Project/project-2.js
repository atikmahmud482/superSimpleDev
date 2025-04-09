const prompt = require("prompt-sync")();

let number1;
while (true) {
  number1 = parseFloat(prompt("Enter Number 1: "));
  if (isNaN(number1)) {
    console.log("Please enter a valid number.");
  } else {
    break;
  }
}

let number2;
while (true) {
  number2 = parseFloat(prompt("Enter Number 2: "));
  if (isNaN(number2)) {
    console.log("Please enter a valid number.");
  } else {
    break;
  }
}

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
console.log("Thank you for using the calculator! Have a great day!");
