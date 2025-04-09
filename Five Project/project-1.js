const prompt = require("prompt-sync")();

const name = prompt("What is your name? ");
console.log("Hello", name, "Welcome to the game!");

const shouldWePlay = prompt("Do you want to play? (yes/no) ");

if (shouldWePlay.toLowerCase() === "yes") {
  const leftOrRight = prompt(
    "You enter a maze. Do you want to go left or right? "
  );

  if (leftOrRight.toLowerCase() === "left") {
    console.log("You see a bridge...");

    const cross = prompt("Do you want to cross the bridge? (yes/no) ");
    if (cross.toLowerCase() === "yes") {
      console.log(
        "You cross, but the bridge was weak and broke. You fall. You lost..."
      );
    } else {
      console.log("Good choice... You win!");
    }
  } else if (leftOrRight.toLowerCase() === "right") {
    console.log("You fall off a cliff... You lost.");
  } else {
    console.log("Invalid choice. Please choose 'left' or 'right'.");
  }
} else if (shouldWePlay.toLowerCase() === "no") {
  console.log("Okay, maybe next time!");
} else {
  console.log("Please answer with 'yes' or 'no'.");
}
