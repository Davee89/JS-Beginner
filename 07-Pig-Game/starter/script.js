'use strict';
let rollNumber = Math.trunc(Math.random() * 6) + 1;
let current = 0;
let total = [0, 0];
let activePlayer = 0;
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// * Zeroing the current score!
const zeroingCurrent = function () {
  current = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
};

btnRoll.addEventListener('click', function () {
  rollNumber = Math.trunc(Math.random() * 6) + 1;
  if (rollNumber !== 1 && total[`${activePlayer}`] <= 100) {
    dice.setAttribute('src', `dice-${rollNumber}.png`);
    current += rollNumber;
    document.querySelector(`#current--${activePlayer}`).textContent = current;
  } else {
    dice.setAttribute('src', `dice-${rollNumber}.png`);
    zeroingCurrent();
    activePlayer = activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  }
});

btnHold.addEventListener('click', function () {
  total[`${activePlayer}`] += current;
  document.querySelector(`#score--${activePlayer}`).textContent =
    total[`${activePlayer}`];
  zeroingCurrent();
  activePlayer = activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
});
