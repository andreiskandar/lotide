const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((el, index) => el === arr2[index]);
};

const assertArraysEqual = (arr1, arr2) => {
  return eqArrays(arr1, arr2)
    ? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🛑🛑🛑 Assertion Failed: "${arr1}" !== "${arr2}"`);
};

const without = (source, itemsToRemove) => {
  if (eqArrays(source, itemsToRemove)) return [];
  else {
    let withoutArr = [...source];
    for (let item = 0; item < itemsToRemove.length; item++) {
      let index = source.indexOf(itemsToRemove[item]);
      if (index >= 0) withoutArr.splice(index, 1);
    }
    console.log(withoutArr);
    return withoutArr;
  }
  // check if element from itemsToRemove arr is present in source array
  // if no,
};

// without([1, 2, 3], [1, 3, 1]);

// const words = ['hello', 'world', 'lighthouse'];
// without(words, ['hello']);

// without(['1', '2', '3'], [1, 2, '3']);

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ['hello', 'world', 'lighthouse']);
