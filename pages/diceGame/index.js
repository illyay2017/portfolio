let playerOneScore;
let playerTwoScore;
let playerOneTurn;

const message = document.getElementById("message");

const playerOneScoreBoard = document.getElementById("player1Scoreboard");
const playerOneDice = document.getElementById("player1Dice");
const playerTwoScoreBoard = document.getElementById("player2Scoreboard");
const playerTwoDice = document.getElementById("player2Dice");

const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

rollBtn.addEventListener("click", rollDice);
resetBtn.addEventListener("click", resetGame);

initialize();

function rollDice(e) {
  let score = Math.floor(Math.random() * 6) + 1;

  if (playerOneTurn) {
    playerOneScore += score;
  } else {
    playerTwoScore += score;
  }
  updateDiceAndScoreBoard(score);
  if (isGameOver()) {
    endGame();
  } else {
    passTurn();
  }
}

function getPlayerTurn() {
  return playerOneTurn ? 'Player 1' : 'Player 2';
}

function updateDiceAndScoreBoard(score) {
  if (playerOneTurn) {
    playerOneDice.textContent = score;
    playerOneScoreBoard.textContent = playerOneScore;
  } else {
    playerTwoDice.textContent = score;
    playerTwoScoreBoard.textContent = playerTwoScore;
  }
}

function passTurn() {
  playerOneDice.classList.toggle("active");
  playerTwoDice.classList.toggle("active");
  playerOneTurn = !playerOneTurn;
  message.textContent = `${getPlayerTurn()}'s Turn`;
}

function isGameOver() {
  return playerOneScore >= 20 || playerTwoScore >= 20;
}

function endGame() {
  message.textContent = `${getPlayerTurn()} has won!`;
  showResetButton();
}

function resetGame() {
  initialize();
  hideResetButton();
}

function showResetButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}

function hideResetButton() {
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";
}

function initialize() {
  playerOneTurn = Math.random() < 0.5;
  playerOneScore = 0;
  playerTwoScore = 0;

  playerOneDice.textContent = "-";
  playerOneScoreBoard.textContent = playerOneScore;

  playerTwoDice.textContent = "-";
  playerTwoScoreBoard.textContent = playerTwoScore;

  setDiceToActiveBasedOnTurn();
  message.textContent = `${getPlayerTurn()}'s Turn`;
}

function setDiceToActiveBasedOnTurn() {
  if (playerOneTurn) {
    playerOneDice.classList.add("active");
    playerTwoDice.classList.remove("active");
  } else {
    playerOneDice.classList.remove("active");
    playerTwoDice.classList.add("active");
  }
}
