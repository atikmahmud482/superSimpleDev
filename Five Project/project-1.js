const prompt = require("prompt-sync")();
const name = prompt("what is your name? ");
console.log("Hello", name, "Welcome to the game!");

const shouldWePlay = prompt("Do you want to play? ");

if (shouldWePlay.toLowerCase() === "yes") {
  // Game logic goes here
  const lefOrRight = prompt(
    "You enter a maze, do you want to go left or right? "
  );
  if (lefOrRight === "left") {
    console.log("You will see the bridge...");
    const cross = prompt("Do you want to cross the bridge? ");
    if (cross === "yes") {
      console.log(
        "you cross but the bridge was weak and broke and you fall. you lost..."
      );
    } else {
      console.log("Good choice...you win");
    }
  } else {
    console.log("you will fall of a cliff...");
  }
} else if (shouldWePlay.toLowerCase() === "no") {
  console.log("Okay, maybe next time!");
} else {
  console.log("Please answer with 'yes' or 'no'. ");
}
