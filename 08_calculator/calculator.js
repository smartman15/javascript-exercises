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
  const arr = [];
  // create for loop that starts from 1 and ends at a (if a is 0, add 0 into array)
  if(a == 0){
    arr.push(1);
  }
  else{
    for(let i = 1; i <= a; i++){
      // add i into array
      arr.push(i);
    }
  }
  
  // use reduce() to multiply all numbers together and return value 
  return arr.reduce((accum, num) => accum * num, 1);
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
