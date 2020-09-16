const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((el, index) => el === arr2[index]);
};

const eqObjects = (object1, object2) => {
  //compare data types and length of its keys
  if (typeof object1 !== typeof object2 || Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (let item in object1) {
    if (!object2.hasOwnProperty(item)) return false;

    // check if the value is an array
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      //if it is an array, use function eqArrays for comparison
      if (!eqArrays(object1[item], object2[item])) return false;
    }

    // check if both value are objects
    else if (typeof object1[item] === 'object' && typeof object2[item] === 'object') {
      // recursively check if they are value of the objects are equal
      if (!eqObjects(object1[item], object2[item])) return false;
    }

    // primitive value comparison
    else if (object1[item] !== object2[item]) return false;
  }

  //if all checks pass, toggle pass to true then return it
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const actual = { a: 1, b: 2 };
const expected = { a: 1, b: 2 };

assertObjectsEqual(actual, expected);
