const removeFromArray = function(array, deletedElement1, deletedElement2, deletedElement3, deletedElement4) {
    // create for loop 
    for (i = 0 ; i < array.length ; i++){
        // keep iterating until it finds element that you want to remove (use if statement)
        if (array[i] === deletedElement1 || array[i] === deletedElement2){
            // after finding the element, use splice() to remove it from array
            array.splice(i, 1);
            i = 0;
        }
    }
    // after for loop is over, return array from splice() result
    return array;
};

let array = [1,2,3,4];
console.log(removeFromArray(array, 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
