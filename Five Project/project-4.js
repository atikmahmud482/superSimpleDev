// tick-toc-toe

const prompt = require("prompt-sync")();

function makeMove(turn, board) {
  while (true) {
    const row = parseInt(prompt(`Player ${turn}, enter row (1-3): `));
    const col = parseInt(prompt(`Player ${turn}, enter col (1-3): `));

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

let turn = "X";
let turnCount = 0;

while (turnCount < 9) {
  makeMove(turn, board);
  console.log(board);
  turn = turn === "X" ? "O" : "X";
  turnCount++;
}
