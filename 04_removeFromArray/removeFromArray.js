const removeFromArray = function(array, deletedElement1, deletedElement2, deletedElement3, deletedElement4) {
    // create for loop 
    for (let i = 0 ; i < array.length ; i){
        
        // keep iterating until it finds element that you want to remove (use if statement)
        if (array[i] === deletedElement1 || array[i] === deletedElement2 || array[i] === deletedElement3 || array[i] === deletedElement4){
            // after finding the element, use splice() to remove it from array
            array.splice(i, 1);

            // reset index to 0 after splice
            i = 0;
        } else{
            i++;
        }
    }
    // after for loop is over, return array from splice() result
    return array;
};


// Do not edit below this line
module.exports = removeFromArray;