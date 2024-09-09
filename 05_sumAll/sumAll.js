const sumAll = function(firstNumber, secondNumber) {
    // create totalSum and assign it 0
    let totalSum = 0;
    // create for loop
    // in the parentheses, begin with i (sentry) at firstNumber (start) and add 1 (change) to i on each iteration until i is larger than or equal to secondNumber
    for (let i = firstNumber; i >= secondNumber; i++){
        // each iteration add i into totalSum
        totalSum += i;
    }
    
    // after for loop ends, return totalSum
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
