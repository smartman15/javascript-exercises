const repeatString = function(string, number) {
    // create variable 'repeatedWord' to store the string
    let repeatedWord = '';
    // create for loop that concatenates a string to 'i' variable a certain number of times
    for (let i = 0; i < number; i++){
        // concatenate string to repeatedWord
        repeatedWord += string;
    }
    // alert repeatedWord
    console.log(repeatedWord);
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
