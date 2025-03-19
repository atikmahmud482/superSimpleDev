let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

let isAutoPlaying = false;
let intervalId;

/* const autoPlay = () => {

} */
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === computerMove) {
    result = "Tie.";
    score.ties += 1;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You win.";
    score.wins += 1;
  } else {
    result = "You lose.";
    score.losses += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.getElementById(
    "result"
  ).innerText = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;

  updateScoreDisplay();
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) return "rock";
  if (randomNumber < 2 / 3) return "paper";
  return "scissors";
}

function updateScoreDisplay() {
  document.getElementById(
    "score"
  ).innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function resetScore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem("score");
  updateScoreDisplay();
  document.getElementById("result").innerText = "Score reset!";
}

updateScoreDisplay();
