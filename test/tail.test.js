const tail = require('../tail.js');
const chai = require('chai');
const assert = chai.assert;

describe('#tail()', () => {
	it('should return [2, 3, 4] when given [1, 2, 3, 4]', () => {
		const arr = [1, 2, 3, 4];
		const actual = tail(arr);
		const expected = [2, 3, 4];
		assert.deepEqual(actual, expected);
	});

	it('should return ["b", "c", "d"] when given ["a", "b", "c", "d"]', () => {
		const arr = ['a', 'b', 'c', 'd'];
		const actual = tail(arr);
		const expected = ['b', 'c', 'd'];
		assert.deepEqual(actual, expected);
	});
});
