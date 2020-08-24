const head = require('../head');
const chai = require('chai');
const assert = chai.assert;

// const assertEqual = require('../assertEqual');

describe('#head()', () => {
	it('should return 1 when given [1, 2, 3]', () => {
		const arr = [1, 2, 3];
		const actual = head(arr);
		const expected = 1;
		assert.equal(actual, expected);
	});
	it('should return 5 when given ["5"]', () => {
		const arr = ['5'];
		const actual = head(arr);
		const expected = 5;
		assert.equal(actual, expected);
	});
});
