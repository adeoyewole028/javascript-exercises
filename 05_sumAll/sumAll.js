const sumAll = function (num1, num2) {
  if (num2 < typeof String || num1 < 0) {
    return "ERROR";
  } else if (num1 > 1) {
    for (let i = 0; i <= num2; i++) {
      let sum = (num1 * (num1 + num2)) / 2;
      return sum;
    }
  }
  for (let i = 0; i <= num1; i++) {
    let sum = (num2 * (num2 + num1)) / 2;
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
