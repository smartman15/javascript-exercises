const removeFromArray = function(array, deletedElement) {
    // create for loop 
    for (i = 0 ; i < array.length ; i++){
        // keep iterating until it finds element that you want to remove (use if statement)
        if (array[i] === deletedElement){
            // after finding the element, use splice() to remove it from array
            resultArray = array.splice()
        }

    }
    // after for loop is over, return array from slice() result
};

// Do not edit below this line
module.exports = removeFromArray;
