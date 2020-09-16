const _ = require('../index');
const assert = require('chai').assert;

describe('#countLetters()', () => {
  it('should return { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } when given a string "lighthouse in the house"', () => {
    const input = 'lighthouse in the house';
    const actual = _.countLetters(input);
    const expected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
    assert.deepEqual(actual, expected);
  });
});
