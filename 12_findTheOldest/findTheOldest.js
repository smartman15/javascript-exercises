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
        // check if value yearOfDeath exists in a person
        // if yearOfDeath doesnt exist, calculate age using date function
        if(!("yearOfDeath" in a)){
          const date = new Date();
          const deathYear = date.getFullYear();
          a["yearOfDeath"] = deathYear;
        }
        if(!("yearOfDeath" in b)){
          const date = new Date();
          const deathYear = date.getFullYear();
          b["yearOfDeath"] = deathYear;
        }
        
        // calculate age using date function
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
