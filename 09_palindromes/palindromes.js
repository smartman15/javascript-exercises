const palindromes = function (word) {
    // turn string into array
    const arr = word.split("");
    // use array methods to manipulate array
    
    const filteredArr = arr
                        // remove punctuation, comas, periods and spaces
                        .filter((letter) => (letter != '!' && letter != ',' && letter != '.' && letter != ' '))
                        // turn letters into lower-case
                        .map(letter => letter.toLowerCase());
    // turn letters into lower-case
    // glue string together in the end
    word = filteredArr.join('');

    const wordLength = word.length;
    let j = wordLength - 1;

    // start a for loop that goes from left to right
    for(let i = 0; i < wordLength; i++){
        // check if the left and right are equal
        // if all letters have been checked and equal, return true
        // else return false
        if(word[i] !== word[j]) return false;
        j--;
            
    }
    return true;
        
};

// Do not edit below this line
module.exports = palindromes;
