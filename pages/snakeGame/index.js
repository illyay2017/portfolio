const startButton = document.getElementById('start');
const score = document.getElementById('score');
const grid = document.querySelector('.grid');
let frequency = 1000; //amount of time between snake moves;
let timerId;

document.addEventListener('keydown', control);
startButton.addEventListener('click', startGame);

let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
let width = 10;
let appleIndex = 0;
let currentScore = 0;


function createdGrid() {
  for (let i = 0; i < 100; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    grid.appendChild(square);
    squares.push(square);
  }
}

createdGrid();
currentSnake.forEach(idx => squares[idx].classList.add('snake'));

function move() {
  if (hasHitObstacle(currentSnake)) {
    return clearInterval(timerId);
  }
  const tail = currentSnake.pop();
  squares[tail].classList.remove('snake');
  currentSnake.unshift(currentSnake[0] + direction);

  if (hasEatenApple(currentSnake)) {
    squares[appleIndex].classList.remove('apple');
    growSnake(tail);
    currentSnake.push(tail);
    generateApple();
    updateScore();
    speedUp();
  }

  squares[currentSnake[0]].classList.add('snake');
}

function control(e) {
  switch (e.key) {
    case "ArrowLeft":
      direction = -1;
      break;
    case "ArrowUp":
      direction = -width
      break;
    case "ArrowRight":
      direction = 1;
      break;
    case "ArrowDown":
      direction = +width;
      break;
    default:
      break;
  }
}

function hasHitObstacle(currentSnake) {
  let head = currentSnake[0];
  if (
    hasHitBottomWallWhileTravelingDown(head) ||
    hasHitTopWallWhileTravelingUp(head) ||
    hasHitLeftWallWhileTravelingLeft(head) ||
    hasHitRightWallWhileTravelingRight(head) ||
    hasHitSelf(head)
  ) {
    return true;
  } else {
    return false;
  }
}

function hasHitBottomWallWhileTravelingDown(head) {
  return head + width >= width * width && direction === width;
}

function hasHitTopWallWhileTravelingUp(head) {
  return head - width < 0 && direction === -width;
}

function hasHitLeftWallWhileTravelingLeft(head) {
  return head % width === 0 && direction === -1;
}

function hasHitRightWallWhileTravelingRight(head) {
  return head % width === width - 1 && direction === 1;
}

function hasHitSelf(head) {
  if (squares[head + direction].classList.contains('snake')) {
    return true;
  }
}

function generateApple() {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains('snake'))
  squares[appleIndex].classList.add('apple');
}

function hasEatenApple(currentSnake) {
  return squares[currentSnake[0]].classList.contains('apple');
}

function growSnake(tail) {
  squares[tail].classList.add('snake');
}

function updateScore(reset=false) {
  reset ? currentScore = 0 : currentScore++;
  score.textContent = currentScore;
}

function speedUp() {
  clearInterval(timerId);
  frequency = frequency * 0.9; // 25% frequency increase (1000ms => 750 ms = faster move frequency)
  timerId = setInterval(move, frequency);
}

generateApple();

function startGame() {
  clearInterval(timerId);
  currentSnake = [2, 1, 0];
  updateScore(true);
  frequency = 1000;
  timerId = setInterval(move, frequency);
}
