const totalIntegers = function (object) {
  if (!(Array.isArray(object) || typeof object === "object")) {
    return undefined;
  } else if (
    object !== null &&
    (object.length === 0 || Object.keys(object).length === 0)
  ) {
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
    return count;
  }
};

// Do not edit below this line
module.exports = totalIntegers;
