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
