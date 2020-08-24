const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(middle([1, 2, 3, 7, 4, 5]));
const array = [1, 'two', 4];
const mid = middle(array);

assertArraysEqual(mid, ['two']);
// assertArraysEqual(midInArray, ['two']);
// assertArraysEqual(mid, ['two', { a: 1 }]);
