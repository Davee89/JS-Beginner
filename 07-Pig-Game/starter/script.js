'use strict';
let current = 0;
let total = [0, 0];
let activePlayer = 0;
let playing = true;
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
dice.style.display = 'none';

// * Zeroing the current score!
const zeroingCurrent = function () {
  current = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
};
// * Switching players
const switchPlayer = function () {
  activePlayer = activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(`.player--0`).classList.toggle('player--active');
  document.querySelector(`.player--1`).classList.toggle('player--active');
};

// ! Button ROLL ! //
btnRoll.addEventListener('click', function () {
  if (playing) {
    //   Rolling and showing dice
    let rollNumber = Math.trunc(Math.random() * 6) + 1;
    dice.style.display = 'block';
    dice.setAttribute('src', `dice-${rollNumber}.png`);
    //   Adding score to current count
    if (rollNumber !== 1) {
      current += rollNumber;
      document.querySelector(`#current--${activePlayer}`).textContent = current;
    }
    //   If getting 1 on dice swaping to other player
    else {
      zeroingCurrent();
      switchPlayer();
    }
  }
});
// ! BUTTON HOLD ! //
btnHold.addEventListener('click', function () {
  if (playing) {
    //   Adding current score to total
    total[`${activePlayer}`] += current;
    document.querySelector(`#score--${activePlayer}`).textContent =
      total[`${activePlayer}`];
    zeroingCurrent();
    //   Winning condition
    if (total[`${activePlayer}`] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.style.display = 'none';
      // Swaping players if still not won.
    } else {
      switchPlayer();
    }
  }
});
// ! BUTTON NEW GAME ! //
btnNew.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  playing = true;
  total = [0, 0];
  activePlayer = 0;
  zeroingCurrent();
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
});
