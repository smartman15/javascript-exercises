const leapYears = function(year) {
    // What is a leap year? To be a leap year, the year number must be divisible by four – except for end-of-century years, which must be divisible by 400. 
    // This means that the year 2000 was a leap year, although 1900 was not.

    // check if year is divisible by 4
    if (year % 4 === 0){
        // then check if it's and end-of-century year
        // if it is, return true if divisible by 400
        if (year % 100 === 0 && year % 400 === 0){
            return true;
        }

        // if not divisible by 400, return false
        else if (year % 100 === 0 && year % 400 !== 0){
            return false;
        }

        // if it is not an end-of-century year, return true
        else if (year % 100 !== 0){
            return true;
        }
    } else{
        return false;
    }
    
    
    // if not, return false
};

// Do not edit below this line
module.exports = leapYears;
