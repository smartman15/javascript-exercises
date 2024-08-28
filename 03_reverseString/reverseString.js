const reverseString = function(word) {
    // create reversedString variable to store reversed string
    let reversedString = [];
    // turn word into array using split()
    const myArray = word.split('');
    // create for loop 
    for (const letter of word){
        // create 'lastInArray' variable and assign pop() to it
        let lastInArray = word.pop();
        // concatenate lastInArray to reversedString
        reversedString += lastInArray;

    }
    
    // after for loop is over, return reversedString
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
