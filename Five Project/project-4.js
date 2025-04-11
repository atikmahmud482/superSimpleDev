// tick-toc-toe

const prompt = require("prompt-sync")();

function makeMove(turn, board) {
  while (true) {
    const row = parseInt(prompt("Enter row (1-3): "));
    const col = parseInt(prompt("Enter col (1-3): "));

    if (isNaN(row) || row < 1 || row > 3) console.log("Invalid row");
    else if (isNaN(col) || col < 1 || col > 3) console.log("Invalid col");
    else if (board[row - 1][col - 1] !== " ") console.log("Invalid position");
    else {
      board[row - 1][col - 1] = turn;
      break;
    }
  }
}

const board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

makeMove("X", board);
console.log(board);
makeMove("O", board);
console.log(board);
