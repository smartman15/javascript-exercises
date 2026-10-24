const pascal = function (number) {
  if (number === 1) {
    return [1];
  } else {
    const arr = [];

    for (let i = 0; i < number; i++) {
      if (i === 0) {
        arr.push(pascal(number - 1)[i]);
        arr.push(pascal(number - 1)[i] + pascal(number - 1)[i + 1]);
      } else if (i === number - 1) {
        arr.push(pascal(number - 1)[i - 1] + pascal(number - 1)[i]);
        arr.push(pascal(number - 1)[i]);
      } else {
        const result = pascal(number - 1)[i - 1] + pascal(number - 1)[i];
        arr.push(result);
      }
    }

    return arr;
  }
};

// Do not edit below this line
module.exports = pascal;
