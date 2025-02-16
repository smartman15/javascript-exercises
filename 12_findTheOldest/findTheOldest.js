const findTheOldest = function(arr) {
    // object structure
    /*const people = [
        {
          name: "Carly",
          yearOfBirth: 1942,
          yearOfDeath: 1970,
        },
        {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
        {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
      ]*/
    
    // use sort() to determine who is the oldest
    // in the sort() calculate age of the two people, sort from oldest to youngest
    const sortedArr = arr.sort(function(a, b){
        const ageA = a.yearOfDeath - a.yearOfBirth;
        const ageB = b.yearOfDeath - b.yearOfBirth;

        return ageB - ageA;
    })
    
    // return the object of the oldest person
    const oldest = sortedArr[0];
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
