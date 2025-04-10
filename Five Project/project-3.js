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

function addContract() {}

function deleteContract() {}

function searchContract() {}

function listContracts(contracts) {}

printInfo();

let keepGoing = true;
while (keepGoing) {
  const number = prompt("Enter and operation 1-5: ");
  switch (number) {
    case "1":
      addContract();
      break;

    case "2":
      deleteContract();
      break;

    case "3":
      listContracts();
      break;

    case "4":
      searchContract();
      break;

    case "5":
      keepGoing = false;
      break;

    default:
      console.log("Unknown");
      break;
  }
}
