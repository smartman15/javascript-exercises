const contains = function (object, searchValue) {
  if (
    Array.isArray(Object.values(object)) &&
    Object.values(object).includes(searchValue)
  ) {
    return true;
  } else {
    let found = false;
    for (const key in object) {
      if (
        typeof object[key] === "object" &&
        object[key] !== null &&
        !Array.isArray(object[key])
      ) {
        found = contains(object[key], searchValue);
      }
    }
    if (found === true) {
      return true;
    } else {
      return false;
    }
    // for (let i = 0; i < Object.keys(object).length; i++) {
    //   if (
    //     typeof Object.values(object)[i] === "object" &&
    //     Object.values(object)[i] !== null &&
    //     !Array.isArray(Object.values(object)[i])
    //   ) {
    //     contains(object[Object.keys(object)[i]], searchValue);
    //   }
    // }
  }
};

// Do not edit below this line
module.exports = contains;
