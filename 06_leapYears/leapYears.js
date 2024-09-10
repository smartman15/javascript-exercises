const leapYears = function(year) {
    // What is a leap year? To be a leap year, the year number must be divisible by four – except for end-of-century years, which must be divisible by 400. 
    // This means that the year 2000 was a leap year, although 1900 was not.

    // if year is divisible by 4, return true
    if (year % 4 === 0){
        return true;
    // if year is divisible by 100 and 400, return true
    } else if (year % 100 === 0 && year % 400 === 0){
        return true;
    } else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
