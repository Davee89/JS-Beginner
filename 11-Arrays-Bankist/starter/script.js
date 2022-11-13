'use strict';

// const checkDogs = function (arrayJulia, arrayKate) {
//   const newJulia = arrayJulia.slice(1, 3).concat(arrayKate);
//   console.log(newJulia);
//   newJulia.forEach(function (dog, i) {
//     dog >= 3
//       ? console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`)
//       : console.log(`Dog number ${i + 1} is still a puppy 🐶
//     `);
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////
const displayMovements = function (acc, sort = false) {
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  containerMovements.innerHTML = '';
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
                  <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
                  <div class="movements__value">${mov}€</div>
                  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const int = account.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * account.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${int}€`;
};

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movementsUSD);

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.slice(0, 1))
      .join('');
  });
};

createUserName(accounts); // stw

let currentUsername;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentUsername = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentUsername?.pin === Number(inputLoginPin.value)) {
    // Displaying UI and welcome message
    containerApp.style.opacity = 1;
    labelWelcome.textContent = `Good day ${currentUsername.owner.slice(
      0,
      currentUsername.owner.indexOf(' ')
    )}`;
    // Clear fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();
    // Display balance
    updateUI(currentUsername);
    calcDisplayBalance(currentUsername);
    // Display movements
    displayMovements(currentUsername);
    // Display Summary
    calcDisplaySummary(currentUsername);
  } else {
    inputLoginPin.value = inputLoginUsername.value = '';
  }
});

const updateUI = function (acc) {
  calcDisplayBalance(acc);
  displayMovements(acc);
  calcDisplaySummary(acc);
};

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    amount <= currentUsername.balance &&
    receiverAcc?.username !== currentUsername.username
  ) {
    currentUsername.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentUsername);
  }
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentUsername.movements.some(mov => mov > 0.1 * amount)) {
    currentUsername.movements.push(amount);
    updateUI(currentUsername);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentUsername.username === inputCloseUsername.value &&
    Number(inputClosePin.value) === currentUsername.pin
  ) {
    accounts.splice(
      accounts.findIndex(acc => acc.username === currentUsername.username),
      1
    );

    currentUsername = '';
    containerApp.style.opacity = 0;
  } else {
    inputClosePin.value = inputCloseUsername.value = '';
  }
  console.log(accounts);
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentUsername, !sorted);
  sorted = !sorted;
});
// console.log(account1, account2, account3, account4);

// const deposits = movements.filter(mov => mov > 0);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
// console.log(balance);

// // ! CHALLENGE 2 ! //
// const calcAverageHumanAge = function (ages) {
//   const humanAverage = ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return humanAverage;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);
// let accountTwo = '';
// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     accountTwo = acc;
//   }
// }
// console.log(accountTwo);

const random = Array.from(
  { length: 100 },
  cur => Math.trunc(Math.random(cur) * 6) + 1
);
console.log(random);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI.sort((a, b) => b - a));
});

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// ? 1st task
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);
// ? 2nd task
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
if (dogSarah.recommendedFood * 0.9 > dogSarah.curFood)
  console.log('Too little');
else if (dogSarah.recommendedFood * 1.1 < dogSarah.curFood)
  console.log('Too much');
else {
  console.log('Eating healthy!');
}
// ? 3rd Task
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];
dogs.forEach(function (dog) {
  if (dog.recommendedFood * 0.9 > dog.curFood)
    ownersEatTooLittle.push(...dog.owners);
  else if (dog.recommendedFood * 1.1 < dog.curFood)
    ownersEatTooMuch.push(...dog.owners);
});
console.log(ownersEatTooLittle, ownersEatTooMuch);
// ? 4th Task
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
// ? 5th Task
console.log(dogs.some(dog => dog.recommendedFood === dog.curFood));
// ? 6th task
console.log(
  dogs.some(
    dog =>
      dog.recommendedFood * 1.1 >= dog.curFood &&
      dog.recommendedFood * 0.9 <= dog.curFood
  )
);
// ? 7th Task
const goodDog = dogs.filter(
  dog =>
    dog.recommendedFood * 1.1 >= dog.curFood &&
    dog.recommendedFood * 0.9 <= dog.curFood
);
console.log(goodDog);
// ? 8th Task
const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
