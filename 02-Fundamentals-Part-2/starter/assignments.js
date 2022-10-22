"use strict";
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const Poland = describeCountry("Poland", 38, "Warsaw");
const Germany = describeCountry("Germany", 80, "Berlin");
const USA = describeCountry("USA", 120, "Washington");
console.log(Poland, Germany, USA);

// * NEXT

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percentagePoland = percentageOfWorld1(38);
const percentageGermany = percentageOfWorld1(80);
const percentageUSA = percentageOfWorld1(120);
console.log(percentagePoland, percentageGermany, percentageUSA);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
console.log(percentageOfWorld2(38), percentageOfWorld2(80), percentageOfWorld2(120));

// * NEXT

const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(percentageOfWorld3(38), percentageOfWorld3(80), percentageOfWorld3(120));

// * NEXT
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} millions people, which is about ${percentage}% of the world`;
}
console.log(describePopulation("Poland", 38));
// ! CHALLENGE 1 ! //
const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
  return (scoreOne + scoreTwo + scoreThree) / 3;
};
const averageDolphins = calcAverage(85, 54, 41);
const averageCoalas = calcAverage(23, 34, 27);
const checkWinner = function (avgDolphins, avgCoalas) {
  if (avgCoalas >= 2 * avgDolphins) {
    console.log(`Coalas win (${avgCoalas} vs ${avgDolphins})`);
  } else if (2 * avgCoalas <= avgDolphins) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgCoalas})`);
    return `Dolphins win (${avgDolphins} vs ${avgCoalas})`;
  } else {
    console.log(`Noone wins this time. The result is (Dolphins ${avgDolphins} vs Coalas ${avgCoalas})`);
  }
};
const winnerOne = checkWinner(averageDolphins, averageCoalas);
console.log(winnerOne + 2);
// * NEXT
const populations = new Array(38, 80, 120, 1180);
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])];
console.log(percentages);
// * NEXT
