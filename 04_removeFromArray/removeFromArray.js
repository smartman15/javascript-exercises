const removeFromArray = function(array, deletedElement1, deletedElement2) {
    // create for loop 
    for (i = 0 ; i < array.length ; i++){
        // keep iterating until it finds element that you want to remove (use if statement)
        if (array[i] === deletedElement1 || array[i] === deletedElement2){
            // after finding the element, use splice() to remove it from array
            resultArray = array.splice(i, 1);
        }
    }
    // after for loop is over, return array from splice() result
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
