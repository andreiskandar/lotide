const eqArrays = require('../eqArrays.js');

console.log(eqArrays([1, [2, 'b', [5]], 3], [1, [2, 'b', 5], 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
