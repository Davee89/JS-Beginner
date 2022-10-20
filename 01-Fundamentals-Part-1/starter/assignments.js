let Country = "Poland";
const Continent = "Europe";
let Population = 38;
console.log(Country, Continent, Population);
// * Next
let isIsland = false;
let Language;
console.log(typeof isIsland, typeof Population, typeof Country, typeof Language);
// * Next
Language = "polish";
console.log(Population);
// * Next
// Population /= 2;
// Population++;
console.log(Population);
let PopulationFinland = 6;
let PopulationAverage = 33;
let description = "Portugal is in Europe, and its 11 million people speak portuguese";
console.log(Population > PopulationFinland);
console.log(Population < PopulationAverage);
// ! 1st challenge ! //
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;
let MarkBMI = massMark / heightMark ** 2;
let JohnBMI = massJohn / heightJohn ** 2;
console.log(MarkBMI, JohnBMI);
let markHigherBMI = MarkBMI > JohnBMI;
console.log(markHigherBMI);
massMark = 95;
massJohn = 85;
heightMark = 1.88;
heightJohn = 1.76;
MarkBMI = massMark / heightMark ** 2;
JohnBMI = massJohn / heightJohn ** 2;
console.log(MarkBMI, JohnBMI);
markHigherBMI = MarkBMI > JohnBMI;
console.log(markHigherBMI);
// * Next
description = `Portugal is in Europe, and its 11 million people speak portuguese`;
// * Next -- Windows + . ❤ ❤ ❤ 😁 😁 😁 👏 👏 👏 🐱‍👤 🐱‍👤 🐱‍👤
if (Population > PopulationAverage) {
  console.log(`Poland's population is above average`);
} else {
  const populationDiffrence = PopulationAverage - Population;
  console.log(`Poland's population is ${populationDiffrence} million below average`);
}
// ! Coding Challenge 2 ! //
if (MarkBMI > JohnBMI) {
  console.log(`Mark's BMI (${Math.round(MarkBMI)}) is higher than John's (${Math.round(JohnBMI)})!`);
} else {
  console.log(`John's BMI (${Math.round(JohnBMI)}) is higher than Mark's (${Math.round(MarkBMI)})!`);
}
// * Next
