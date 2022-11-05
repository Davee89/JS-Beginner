'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// ! CHALLENGE 1 ! //
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//  ? Task 1 //
const [players1, players2] = game.players;
console.log(players1, players2);
// ? Task 2 //
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// ? Task 3 //
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// ? Task 4 //
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// ? Task 5 //
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
// ? Task 6 //
const printGoals = function (...players) {
  console.log(...players);
  console.log(players.length);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
// ? Task 7 //
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
// * ***************************** * //
for (const [i, j] of players1.entries()) {
  console.log(i, j);
}
// ! CHALLENGE 2 ! //
// ? TASK 1 //
for (const [goal, scorer] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${scorer}`);
}
// ? TASK 2 //
const oddsNew = Object.values(game.odds);
console.log(oddsNew);
let aver = 0;
for (const odd of oddsNew) {
  aver += odd;
  console.log(aver / oddsNew.length);
}
// ? Task 3 //
console.log(`Odd of victory ${game.team1}: ${game.odds.team1} `);
console.log(`Odd of draw: ${game.odds.x} `);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2} `);
// ? Task 4 //
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
