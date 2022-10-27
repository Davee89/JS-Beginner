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
  dice.setAttribute('src', `dice-${rollNumber}.png`);
  if (rollNumber !== 1) {
    current += rollNumber;
    document.querySelector(`#current--${activePlayer}`).textContent = current;
  } else {
    zeroingCurrent();
    activePlayer = activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector(`.player--0`).classList.toggle('player--active');
    document.querySelector(`.player--1`).classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  total[`${activePlayer}`] += current;
  document.querySelector(`#score--${activePlayer}`).textContent =
    total[`${activePlayer}`];
  document.querySelector(`.player--0`).classList.toggle('player--active');
  document.querySelector(`.player--1`).classList.toggle('player--active');
  if (total[`${activePlayer}`] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    // document
    //   .querySelector(`.name--${activePlayer}`)
    //   .classList.add('player--winner name');
  }
  zeroingCurrent();
  activePlayer = activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
});
