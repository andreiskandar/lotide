const _ = require('../index');
const assert = require('chai').assert;

describe('#letterPositions()', () => {
  it('should return { e: [ 0, 3, 8 ], h: [ 1, 6 ], o: [ 2, 7 ], l: [ 4, 5 ] } when given input "ehoellhoe"', () => {
    const input = 'ehoellhoe';
    const actual = _.letterPositions(input);
    const expected = { e: [0, 3, 8], h: [1, 6], o: [2, 7], l: [4, 5] };
    assert.deepEqual(actual, expected);
  });
});
