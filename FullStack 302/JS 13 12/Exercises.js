// Array Exercise 1

let breakfastArray = ["Bacon", "Eggs", "Toast"];
breakfastArray.push("Haggis");
breakfastArray.unshift("Sausage");
console.log(breakfastArray.length);

// Array Exercise 2

let arrayExample = ["B", "E", "T", "bat"];

function arrayTaker(arrayGiven) {
  console.log(arrayGiven[arrayGiven.length - 1]);
}
arrayTaker(arrayExample);

// Array Exercise 3

function middleFinderOdd(arrayParam) {
  arrayParam = (arrayParam.length + 1) / 2;
  console.log("Middle position is " + arrayParam);
}

let musicGenre = ["Rock", "Rap"];
musicGenre.push("Jazz");
// middleFinderOdd(musicGenre);
musicGenre[(musicGenre.length - 1) / 2] = "Classical";
musicGenre.unshift("Blues", "Reggae");

console.log(musicGenre);

// function middle(i) {
//   if (musicGenre[i] !== undefined) {
//     return middle(i + 1);
//   } else {
//     return musicGenre[Math.floor(i / 2)];
//   }
// }

// console.log(middle(0));

// Array Exercise 4

function sorter(sortParam) {
  return sortParam.sort();
}

console.log(sorter(breakfastArray));

// Loops exercise 1

for (let numCount = 0; numCount < 11; numCount++) {
  console.log(numCount);
}

for (let numCount = 10; numCount > 0; numCount--) {
  console.log(numCount);
}

// Loops exercise 2

let tasks = ["clean", "vacuum", "shop"];

for (let i = 0; i <= 2; i++) {
  let I = 0;
  console.log(`Task ${I + 1}: ${tasks[i]}`);
}

// Loops exercise 3

// let i = 3;

// while (i) {
//   alert(i--);
// }
//The last alert is 1

// Loops exercise 4

for (let n = 0; n < 12; n += 2) {
  console.log(n);
}

// Strings II exercise 1

function addFullStop(string) {
  if (string[string.length - 1] != ".") {
    string = string + ".";
    return console.log(string);
  } else {
    return console.log(string);
  }
}
addFullStop("nana.");

// Strings II exercise 2

function capitalize(caseParam) {
  if (typeof caseParam != "string") {
    return console.log("This is not a string");
  } else {
    return console.log(caseParam.toUpperCase());
  }
}

capitalize("EgG");

// ForEach exercise 1

let favFoods = ["egg", "salad", "watermelon", "cheese"];

function myFunction(item) {
  console.log(item);
}

favFoods.forEach(myFunction);

//ForEach exercise 2 and 3

let numArray = [1, 2, 3, 4, 5];

let total = 0;

function sum(array1) {
  total += array1;
  return total;
}

numArray.forEach(sum);
console.log(total);

//so numArray gets passed by forEach to be the parameter for sum??

total = 1;

function product(array1) {
  total *= array1;
  return total;
}
numArray.forEach(product);
console.log(total);

// forEach exercise 4

let studentGrades = [70, 20, 53, 64, 78, 60, 32];

function passedGrades(itemGrade) {
  if (itemGrade >= 50) {
    console.log(itemGrade);
  }
}

studentGrades.forEach(passedGrades);

// join exercise 1

let students = ["Dave", "Steve", "Jim"];

let text = students.join(" ");

console.log(text);

function toCSV(arrayCommad) {
  text = arrayCommad.join(", ");
  console.log(text);
}

toCSV(students);
