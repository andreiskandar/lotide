const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle()', () => {
	it('should return [3] when given [1, 2, 3, 4, 5]', () => {
		const arr = [1, 2, 3, 4, 5];
		const actual = middle(arr);
		const expected = [3];
		assert.deepEqual(actual, expected);
	});

	it('should return [2, 3] when given [1, 2, 3, 4]', () => {
		const arr = [1, 2, 3, 4];
		const actual = middle(arr);
		const expected = [2, 3];
		assert.deepEqual(actual, expected);
	});
});
