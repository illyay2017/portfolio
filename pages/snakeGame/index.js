const startButton = document.getElementById('start');
const score = document.getElementById('#score');
const grid = document.querySelector('.grid');

document.addEventListener('keydown', control);

let squares = [];
let currentSnake = [2, 1, 0];
let direction = 1;
let width = 10;
let appleIndex = 0;


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

  // deal with snake eating apple
  if (hasEatenApple(currentSnake)) {

    squares[appleIndex].classList.remove('apple');
    growSnake(tail);
    // grow snake by adding a square to it (class)
    // grow snake array
    // generate new apple
    // add 1 point to the score
    // speed up snake
  }
  squares[currentSnake[0]].classList.add('snake');
}

const timerId = setInterval(move, 1000);

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

function hasHitObstacle(snake) {
  let head = snake[0];
  // debugger;
  if (
    hasHitBottomWallWhileTravelingDown(head) ||
    hasHitTopWallWhileTravelingUp(head) ||
    hasHitLeftWallWhileTravelingLeft(head) ||
    hasHitRightWallWhileTravelingRight(head) ||
    hasHitSelf(snake)
  ) {
    return true;
  } else {
    return false;
  }
}

function hasHitBottomWallWhileTravelingDown(head) {
  return head + width >= 100 && direction === width;
}

function hasHitTopWallWhileTravelingUp(head) {
  return head - width <= 0 && direction === -width;
}

function hasHitLeftWallWhileTravelingLeft(head) {
  return head % width === 0 && direction === -1;
}

function hasHitRightWallWhileTravelingRight(head) {
  return head % width - 1 === 0 && direction === 1;
}

function hasHitSelf(snake) {
  if (squares[snake[0] + direction].classList.contains('snake')) {
    console.log('hit self');
    return true;
  }
}

function generateApples() {
  do {
    // generate random number
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


generateApples();

