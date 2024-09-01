const removeFromArray = function(array, deletedElement1, deletedElement2, deletedElement3, deletedElement4) {
    // create for loop 
    for (const element of array){
        // create index from 0
        let index = 0;
        
        // keep iterating until it finds element that you want to remove (use if statement)
        if (element === deletedElement1 || element === deletedElement2 || element === deletedElement3 || element === deletedElement4){
            // after finding the element, use splice() to remove it from array

            // if deletedElement1
            if (element === deletedElement1){
                array.splice(index, 1, deletedElement1);
            }
            // if deletedElement2
            else if (element === deletedElement2){
                array.splice(index, 1, deletedElement2);
            }
            // if deletedElement3
            else if (element === deletedElement3){
                array.splice(index, 1, deletedElement3);
            }
            // if deletedElement4
            else if (element === deletedElement4){
                array.splice(index, 1, deletedElement4);
            }
            

        }
            

    // after for loop is over, return array from splice() result
};


// Do not edit below this line
module.exports = removeFromArray;
