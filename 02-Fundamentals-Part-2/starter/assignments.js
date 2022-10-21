"use strict";
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const Poland = describeCountry("Poland", 38, "Warsaw");
const Germany = describeCountry("Germany", 80, "Berlin");
const USA = describeCountry("USA", 120, "Washington");
console.log(Poland, Germany, USA);
// * NEXT
