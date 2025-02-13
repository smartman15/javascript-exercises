const palindromes = function (word) {
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
