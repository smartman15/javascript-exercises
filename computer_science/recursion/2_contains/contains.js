const contains = function (object, searchValue) {
  if (
    Array.isArray(Object.values(object)) &&
    Object.values(object).includes(searchValue)
  ) {
    return true;
  } else {
    for (let i = 0; i < Object.keys(object).length; i++) {
      if (
        typeof Object.values(object)[i] === "object" &&
        Object.values(object)[i] !== null
      ) {
        return contains(object[Object.keys(object)[i]], searchValue);
      }
    }

    // object.forEach((child) => {
    //   contains(child, searchValue);
    // });
  }

  return false;
};

// Do not edit below this line
module.exports = contains;
