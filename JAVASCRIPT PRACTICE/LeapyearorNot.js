// create a program that checks if a given year is a leap year.

let leapyear = function (year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log("this is Leap Years");
  } else {
    console.log("This is Not leap years");
  }
};

console.log(leapyear(455));
