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

function addContract() {
  const name = prompt("Enter the contract name: ");
  const email = prompt("Enter the contract email: ");
  const contract = {
    name: name,
    email: email,
  };
  contracts.push(contract);
  console.log("Added!");
}

function deleteContract() {
  console.log("Contact IDs: ");
  for (let i = 0; i < contracts.length; i++) {
    const contract = contracts[i];
    console.log((i + 1).toString() + ":", contract.name);
  }
  const number = parseInt(prompt("Enter the contract ID: "));
  if (isNaN(number) || number > contracts.length) {
    console.log("Invalid.");
    return;
  }
  contracts.splice(number - 1, 1);
  console.log("Removed.");
}

function searchContract() {}

function listContracts(contracts) {
  for (let contract of contracts) {
    console.log(contract.name, contract.email);
  }
}

printInfo();

const contracts = [];

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
      listContracts(contracts);
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

// for loop
/* 
const arr = ["apple", "banana", "orange"]
 for(let i = 0; i < 10; i++) {
 console.log(i);
 }
*/
