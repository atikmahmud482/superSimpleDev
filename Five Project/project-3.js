/* Contract Management System */

const prompt = require("prompt-sync")();

function printInfo() {
  console.log("Contract Management System");
  console.log("--------------------------");
  console.log("1. Add a contract");
  console.log("2. Delete a contract");
  console.log("3. View all contracts");
  console.log("4. Search for a contract");
  console.log("5. Exit");
}

printInfo();

const number = prompt("Enter and operation 1-5: ");
switch (number) {
  case "1":
    break;

  case "2":
    break;

  case "3":
    break;

  case "4":
    break;

  case "5":
    break;

  default:
    console.log("Unknown");
}
