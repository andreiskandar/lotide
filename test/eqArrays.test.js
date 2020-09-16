const _ = require('../index');
const assert = require('chai').assert;

describe('#eqArrays()', () => {
  it('should return false when given arr1 = [1, [2, "b", [5]], 3] and arr2 =  [1, [2, "b", 5], 3]', () => {
    const arr1 = [1, [2, 'b', [5]], 3];
    const arr2 = [1, [2, 'b', 5], 3];
    const actual = _.eqArrays(arr1, arr2);
    const expected = false;
    assert.equal(actual, expected);
  });

  it('should return false when given arr1 = [1, 2, 3] and arr2 =  [3, 2, 1]', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [3, 2, 1];
    const actual = _.eqArrays(arr1, arr2);
    const expected = false;
    assert.equal(actual, expected);
  });

  it('should return true when given arr1 = [1, 2, 3] and arr2 =  [1, 2, 3]', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const actual = _.eqArrays(arr1, arr2);
    const expected = true;
    assert.equal(actual, expected);
  });
});
