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
// const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }
// * NEXT
if (Language === "english" && Population < 50 && isIsland === false) {
  console.log("You should live in Poland! :)");
} else {
  console.log("Poland does not meet your criteria :(");
}
// ! 3RD CHALLENGE ! //
const averageDolphins = (97 + 112 + 101) / 3;
const averageKoalas = (109 + 95 + 106) / 3;
console.log(averageDolphins, averageKoalas);
if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log("Team Dolphins wins!");
} else if (averageDolphins === averageKoalas && averageDolphins >= 100) {
  console.log("There is a draw!");
} else if (averageDolphins < averageKoalas && averageKoalas >= 100) {
  console.log("Team Koalas wins!");
} else {
  console.log("No team wins, because they didn't achieve enough points!");
}
// * NEXT
const day = "monday";
if (day === "monday") {
  console.log("do monday tasks");
} else if (day === "tuesday") {
  console.log("do tuesday tasks");
} else if (day === "wednesday" || day === "thursday") {
  console.log("do wednesday/thursday tasks");
} else if (day === "friday") {
  console.log("do friday tasks");
} else if (day === "sunday" || day === "saturday") {
  console.log("do saturday/sunday tasks");
} else {
  console.log("Not a valid day!");
}
switch (Language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native spaekers");
    break;
  case "spanish":
    console.log("2nd place in number of native spaekers");
    break;
  case "english":
    console.log("3rd place in number of native spaekers");
    break;
  case "hindi":
    console.log("4th place in number of native spaekers");
    break;
  case "arabic":
    console.log("5th place in number of native spaekers");
    break;
  default:
    console.log("Great language too :D");
}
// * Next
console.log(`${Country}'s population is ${Population > 33 ? "above" : "below"} average`);
// ! 4th CHALENGE ! //
const billValue = 430;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(`The bill was ${billValue}, the tip was ${tip} and the total value is ${billValue + tip}`);
