const totalIntegers = function (object) {
  // if (JSON.stringify(object) == JSON.stringify({ a: 1, b: "2", c: 3 })) {
  //   return 2;
  // }

  if (object.length === 0 || Object.keys(object).length === 0) {
    return 0;
  } else {
    let count = 0;
    for (const num in object) {
      if (Number.isInteger(object[num])) {
        count += 1;
      } else if (
        (Array.isArray(object[num]) || typeof object[num] === "object") &&
        typeof object[num] !== null
      ) {
        count += totalIntegers(object[num]);
      }
    }
    // let count = 0;
    // if (Array.isArray(Object.values(object))) {
    //   for (const key in object) {
    //     if (typeof object[key] === "number") {
    //       count += 1;
    //     }
    //   }
    // } else {
    //   object.forEach((element) => {
    //     if (typeof element === "number") {
    //       count += 1;
    //     } else if (Array.isArray(element)) {
    //       count += totalIntegers(object);
    //     }
    //   });
    // }

    return count;
  }
};

// Do not edit below this line
module.exports = totalIntegers;
