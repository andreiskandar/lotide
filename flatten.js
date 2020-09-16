// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

// The lodash implementation can handle seemingly unlimited levels of "nested" arrays (arrays containing arrays containing arrays containing ... you get the point). Our function however, will for now be much simpler and only handle one level of nesting.

// flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

const flatten = arr => {
  let flatArr = [];
  arr.forEach(item => (Array.isArray(item) ? flatArr.push(...flatten(item)) : flatArr.push(item)));
  return flatArr;
};

module.exports = flatten;
