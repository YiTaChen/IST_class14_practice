console.log("Hello World");

console.log("\n");

// challenge 1 print result in function

console.log("challenge 1: print result in function");

let fahrenheitsDegree0 = 120;

function getCelsiusByFahrenheits0(fahrenheitsNumber0) {
  let celsiusNumber0;
  celsiusNumber0 = ((fahrenheitsNumber0 - 32) * 5) / 9;

  console.log("Fahrenheits is : " + fahrenheitsNumber0);
  console.log("Celsius is : " + celsiusNumber0);
}

getCelsiusByFahrenheits0(fahrenheitsDegree0);

console.log("\n\n");

// challenge 1.2  get the result from function and print it

console.log("challenge 1.2 : get the result from function and print it");

let fahrenheitsDegree = 90;

function getCelsiusByFahrenheits(fahrenheitsNumber) {
  let celsiusNumber;
  celsiusNumber = ((fahrenheitsNumber - 32) * 5) / 9;
  return celsiusNumber;
}

let celsiusDegree = getCelsiusByFahrenheits(fahrenheitsDegree);

console.log("Fahrenheits is : " + fahrenheitsDegree);

console.log("Celsius is : " + celsiusDegree);

console.log("\n\n");

// challenge 2 Calculate a Tip From the Number

console.log("challenge 2 : Calculate a Tip From the Number");

totalSpentMoney = 250;

let calculateTip = function (totalMoney, tipPercentage = 15) {
  return totalMoney * (tipPercentage / 100);
};

console.log(
  "Total is : " +
    totalSpentMoney +
    "\n" +
    "Tip is : " +
    calculateTip(totalSpentMoney)
);

console.log("\n\n");

// challenge 2.1  Calculate a Tip with custom tip percentage

console.log("challenge 2.1 : Calculate a Tip with custom tip percentage");

let customTip = 5;

console.log(
  "Total is : " +
    totalSpentMoney +
    "\n" +
    "Tip is : " +
    calculateTip(totalSpentMoney, customTip) +
    ", with " +
    customTip +
    "% tips"
);

console.log("\n\n");

// challenge 3 Create the Grade Calculator

console.log("challenge 3 : Create the Grade Calculator");

let studentScore = 900;
let possibleScore = 999;

function getGradePercentageByScore(score, possibleScore) {
  return (score / possibleScore) * 100;
}

function getGradeByPercentage(gradePercentage) {
  let grade;
  if (gradePercentage >= 90) {
    grade = "A";
  } else if (gradePercentage >= 80) {
    grade = "B";
  } else if (gradePercentage >= 70) {
    grade = "C";
  } else if (gradePercentage >= 60) {
    grade = "D";
  } else if (gradePercentage >= 0) {
    grade = "F";
  } else {
    grade = "Invalid";
  }
  return grade;
}

let grade = getGradeByPercentage(
  getGradePercentageByScore(studentScore, possibleScore)
);

console.log(
  `the student got ${grade} in this class. \nWith Socre: ${studentScore} and Possible Score: ${possibleScore}`
);

console.log("\n\n");

// object practice
console.log("object practice");

let teslaCar = {
  model: "Model 3",
  brand: "Tesla",
  price: 500,
  color: "white",
  isAvailable: true,
};

function getCarObj(car) {
  return car;
}

let yourCar = getCarObj(teslaCar);
yourCar.color = "yellow";

console.log(yourCar);
console.log(teslaCar);

console.log("\n\n");

// challenge 4 Create the Expense Tracker

console.log("challenge 4 : Create the Expense Tracker");

let myAccount = {
  holderName: "Yi-Ta",
  expenses: 0,
  income: 0,
};

function addIncome(account, incomeNum) {
  account.income += incomeNum;
}

function addExpense(account, expenseNum) {
  account.expenses += expenseNum;
}

function resetAccount(account) {
  account.income = 0;
  account.expenses = 0;
}

function getAccountSummary(account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.holderName}. Account balance is $${balance}. Expenses are $${account.expenses}, income is $${account.income} in income. `;
}

addIncome(myAccount, 1000);
addExpense(myAccount, 100);
resetAccount(myAccount);
addIncome(myAccount, 3000);
addExpense(myAccount, 500);
console.log(getAccountSummary(myAccount));

console.log("\n\n");

// challenge 5 Loop Through the Array

console.log("challenge 5 : Loop Through the Array ");

let dreamVisitPlaces = ["Japan", "Boston", "Paris"];

function printVisitPlacesForLoop(visitPlaces) {
  for (let i = 0; i < visitPlaces.length; i++) {
    console.log(`${i + 1}. ${visitPlaces[i]}`);
  }
}
printVisitPlacesForLoop(dreamVisitPlaces);

console.log("\n");
console.log("use foreach loop");

function printVisitPlaces(visitPlaces) {
  visitPlaces.forEach(function (place, index) {
    console.log(`${index + 1}. ${place}`);
  });
}
printVisitPlaces(dreamVisitPlaces);

document.getElementById("h1_class").innerHTML = "h1 Content created by js.";
document.getElementById("p2").innerHTML = "p2 Content created by js.";
document.getElementById("p4").innerHTML = "p4 Content created by js.";
