'use strict';

// const bookings = [];
// function createBooking(flightNum = none, numPassengers = 1, price = 200) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// }

// createBooking('Lh123', 100);

// const greet = greeting => name => console.log(`${greeting} ${name}`);
// greet('Hello')('David');

// const addTax = function (value) {
//   return function Vat(rate = 0.23) {
//     value + value * rate;
//   };
// };
// console.log(addTax(100));
// ! CHALLENGE 1 ! //
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};
poll.displayResults = function () {
  let type = this.answers;
  typeof type === 'object' ? console.log(type) : `Poll results are ${type}`;
};
poll.registerNewAnswer = function () {
  let answer = Number(
    prompt(
      `${this.question}\n${this.options.join('\n')}\n(${'Write option number'})`
    )
  );
  console.log(answer);
  typeof answer === 'number' &&
    answer >= 0 &&
    answer <= 3 &&
    this.answers[answer]++;

  this.displayResults();
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
