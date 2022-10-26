'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const displayMessage = function (messages) {
  document.querySelector('.message').textContent = messages;
};

document.querySelector('.check').addEventListener('click', function () {
  const inputtt = Number(document.querySelector('.guess').value);
  if (!inputtt) {
    displayMessage('No number!');
  } else if (inputtt !== secretNumber) {
    if (score <= 1) {
      displayMessage('You lost the game! Start again!');
      document.querySelector('.score').textContent = 0;
    } else {
      displayMessage(inputtt > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (inputtt === secretNumber) {
    displayMessage('Correct number! You won!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').classList.add('green');
    if (document.querySelector('.highscore').textContent < score) {
      document.querySelector('.highscore').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').classList.remove('green');
});
