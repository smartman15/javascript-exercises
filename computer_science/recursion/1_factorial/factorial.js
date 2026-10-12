const factorial = function (number) {
  if (!Number.isInteger(number) || number < 0) {
    return undefined;
  }
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }

  // 0! = 1
  // 1! = 1
  // 2! = 2 x 1 = 2
  // 3! = 3 x 2 x 1 = 6
  // 4! = 4 x 3 x 2 x 1 = 24
  // 51 = 5 x 4 x 3 x 2 x 1 = 120
};

// Do not edit below this line
module.exports = factorial;
