const _ = require('../index');
const assert = require('chai').assert;

describe('#flatten()', () => {
  it('should return [1, 2, 3, 4, 5, 6] when given [1, 2, [3, 4], 5, [6]]', () => {
    const arr = [1, 2, [3, 4], 5, [6]];
    const actual = _.flatten(arr);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(actual, expected);
  });
});
