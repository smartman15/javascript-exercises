const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accumulator, number) => accumulator + number, 0);
};

const multiply = function(arr) {
  return arr.reduce((accum, number) => accum * number, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
	
};

const factorial = function(a) {
  // create an empty array
  // create for loop that starts from 1 and ends at a (if a is 1, add 1 into array)
    // add i into array
  
  // use reduce() to multiply all numbers together and return value 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
