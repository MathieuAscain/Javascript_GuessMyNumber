'use strict';

let secretNumber = getRandomNumber();
let score = 20;
let highScore = 0;

function getRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function saveGuessNumber() {
  return Number(document.querySelector('.guess').value);
}

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setScoreContent = function (score) {
  document.querySelector('.score').textContent = score;
};

const setHighScoreContent = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

const setNumberContent = function (content) {
  document.querySelector('.number').textContent = content;
};

const setBoxNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const setBackGroundColor = function (pixel) {
  document.querySelector('body').style.backgroundColor = pixel;
};

const clearGuessBox = function () {
  document.querySelector('.guess').value = '';
};

document.querySelector('.again').addEventListener('click', function () {
  setScoreContent(score);
  secretNumber = getRandomNumber();
  setBackGroundColor('#222');
  setBoxNumberWidth('15rem');
  setNumberContent('?');
  displayMessage('Start guessing...');
  clearGuessBox();
  //document.querySelector('.guess').value = '';

  score = 20;
  setScoreContent(score);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = saveGuessNumber();

  if (!guess) {
    displayMessage('No number selected');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number !');
    setNumberContent(secretNumber);

    setBackGroundColor('#60b347');
    setBoxNumberWidth('30rem');

    if (score > highScore) {
      setHighScoreContent(score);
      highScore = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high !' : 'Too low !');
      score--;
      setScoreContent(score);
    } else {
      displayMessage('You lost the game !');
      setScoreContent(0);
    }
  }
});
