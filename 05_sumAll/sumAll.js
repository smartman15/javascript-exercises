const sumAll = function(firstNumber, secondNumber) {
    // create totalSum and assign it 0
    let totalSum = 0;

    // if a negative number is entered, return error
    if (firstNumber < 0 || secondNumber < 0){
        return ('ERROR');
    }

    // if a non-integer number is entered, return error
    else if ((firstNumber - Math.floor(firstNumber) !== 0) || (secondNumber - Math.floor(secondNumber) !== 0)){
        return ('ERROR');
    }

    // if a non-number value is entered, return error
    else if (typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number'){
        return ('ERROR');
    }

    // if firstNumber is less than secondNumber
    else if (firstNumber < secondNumber){
        // create for loop
        // in the parentheses, begin with i (sentry) at firstNumber (start) and add 1 (change) to i on each iteration until i is larger than or equal to secondNumber
        for (let i = firstNumber; i <= secondNumber; i++){
            // each iteration add i into totalSum
            totalSum += i;
        }
    }

    // else if firstNumber is greater than secondNumber
    else if (firstNumber > secondNumber){
        // create for loop
        // begin with i at secondNumber and add 1 to i on each iteration until i is larger than or equal to firstNumber
        for (let i = secondNumber; i <= firstNumber; i++){
            totalSum += i;
        }
    }
    
    
    // after for loop ends, return totalSum
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
