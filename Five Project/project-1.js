const prompt = require("prompt-sync")();
const name = prompt("what is your name? ");
console.log("Hello", name, "Welcome to the game!");

const shouldWePlay = prompt("Do you want to play? ");

if (shouldWePlay.toLocaleLowerCase() === "yes") {
  console.log("Great! Let's start the game!");
} else if (shouldWePlay.toLocaleLowerCase() === "no") {
  console.log("Okay, maybe next time!");
}
