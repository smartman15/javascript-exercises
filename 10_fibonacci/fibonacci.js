const fibonacci = function(num) {
    if(typeof num == "string") Number(num);
    if(num == 0) return 0;
    else if(num < 0) return "OOPS";
    
    let initial = [1, 1];
    
    // create a variable to determine how many times the for loop should loop
    let loop = num - 2; // 2 bc that's the length of the initial array
    // create the for loop
    for(let i = 0; i < loop; i++){
        let arrLen = initial.length;
        // use .reduce() to sum two preceding numbers and then add into the array
        // make .reduce() start at index arrLength - 2
        let value = initial.reduce(function(sum, number, index) {
            if(index >= arrLen - 2){
                return sum + number;
            } else{
                return 0;
            }
        }, 0);
        // add value to initial
        initial.push(value);
    }
        
    // return the number at index num-1
    return initial[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
