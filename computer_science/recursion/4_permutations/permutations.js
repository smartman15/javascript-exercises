const permutations = function (array) {
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  let array2 = [];

  for (let i = 0; i < array.length; i++) {
    const leftHalf = array.slice(0, i);
    const rightHalf = array.slice(i + 1, array.length);
    const remainingNumbers = leftHalf.concat(rightHalf);

    for (const subPermutation of permutations(remainingNumbers)) {
      array2.push(subPermutation);
      array2.push(number);
    }
  }
  return array2;
  // array2.push(permutations(array.splice(array.length - 1, 1)));
  // return array2;
};

// Do not edit below this line
module.exports = permutations;
