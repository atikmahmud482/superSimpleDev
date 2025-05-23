// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. Give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;
const SYMBOL_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};
const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, please try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, please try again.");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);
    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log(
        `Invalid bet. Maximum bet is $${(balance / lines).toFixed(2)} per line.`
      );
    } else {
      return numberBet;
    }
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols];
    reels.push([]);
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

const printRows = (rows) => {
  console.log("\nSlot Machine Results:");
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
  console.log("");
};

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;
    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }
    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
      console.log(
        `🎉 Line ${row + 1} won! ${symbols[0]}x${
          SYMBOL_VALUES[symbols[0]]
        } = $${bet * SYMBOL_VALUES[symbols[0]]}`
      );
    }
  }
  return winnings;
};

const game = () => {
  console.log("🎰 Welcome to the Slot Machine! 🎰");
  let balance = deposit();

  while (true) {
    console.log(`\nCurrent balance: $${balance.toFixed(2)}`);
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    const totalBet = bet * numberOfLines;

    console.log(
      `\nBetting $${bet.toFixed(
        2
      )} on ${numberOfLines} line(s). Total bet: $${totalBet.toFixed(2)}`
    );

    balance -= totalBet;
    const reels = spin();
    const rows = transpose(reels);
    printRows(rows);

    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;

    console.log(`You won: $${winnings.toFixed(2)}`);
    console.log(`New balance: $${balance.toFixed(2)}`);

    if (balance <= 0) {
      console.log("\n💸 You're out of money! Game over.");
      break;
    }

    const playAgain = prompt("Do you want to play again? (y/n) ").toLowerCase();
    if (playAgain !== "y") {
      console.log(`\n💰 Final balance: $${balance.toFixed(2)}`);
      console.log("Thanks for playing! Goodbye!");
      break;
    }
  }
};

game();
