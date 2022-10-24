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
const neighbours = ["Ukraine", "Germany", "Czech", "Slovakia"];
neighbours.push("Utopia");
neighbours.pop();
neighbours[1] = "Lituania";
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central Europe country");
} else {
  console.log("It must be in Europe!");
}
console.log(neighbours.indexOf("Germany"));
// ! CHALLENGE 2! //
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};
console.log(calcTip(100));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
const total = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);
console.log(tips);
console.log(total);
// * NEXT
const myCountry = {
  country: "Poland",
  capital: "Warsaw",
  language: "polish",
  population: 38,
  neighbours: neighbours,
};
console.log(myCountry.neighbours);
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDrivingLicense: true,
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
myCountry.population = myCountry.population + 2;
myCountry["population"] = myCountry["population"] - 2;
console.log(myCountry.population);
// * NEXT
console.log(jonas.age);
console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas["job"]}, and he has ${jonas.hasDrivingLicense ? "a" : "no"} driver's license`);

myCountry.describe = function () {
  console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
};
myCountry.describe();
myCountry.checkIsland = function () {
  this.isIsland = this.neighbours.length > 0 ? false : true;
  return this.isIsland;
};
myCountry.checkIsland();
console.log(myCountry);
// ! CHALLENGE 3 ! //
const Mark = {
  name: "Mark",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
const John = {
  name: "John",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};
if (Mark.calcBMI() > John.calcBMI()) {
  console.log(`${Mark.name}'s BMI (${Mark.calcBMI()}) is higher than ${John.name}'s (${John.calcBMI()}!)`);
} else {
  console.log(`${John.name}'s BMI (${John.calcBMI()}) is higher than ${Mark.name}'s (${Mark.calcBMI()}!)`);
}
// * NEXT
for (let vote = 1; vote <= 50; vote++) {
  console.log(`Voter number ${vote} is currently voting`);
}
// * NEXT
