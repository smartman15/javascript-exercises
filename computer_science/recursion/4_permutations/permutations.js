const permutations = function (array) {
  if (array.length === 0 || array.length === 1) {
    return [array];
  }

  const results = [];
  for (let i = 0; i < array.length; i++) {
    const leftHalf = array.slice(0, i);
    const rightHalf = array.slice(i + 1, array.length);
    const remainingNumbers = leftHalf.concat(rightHalf);

    const subPermutation = permutations(remainingNumbers);

    for (let j = 0; j < subPermutation.length; j++) {
      subPermutation[j].push(array[i]);
      results.push(subPermutation[j]);
    }
  }

  return results;
};

// Do not edit below this line
module.exports = permutations;
