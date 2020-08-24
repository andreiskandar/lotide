const head = require('../head');
const chai = require('chai');
const assert = chai.assert;

// const assertEqual = require('../assertEqual');

describe('#head.test()', () => {
	it('should return 2 when given [2, 3, 4, "abc"]', () => {
		const actual = head([2, 3, 4, 'abc']);
		const expected = 2;

		assert.equal(actual, expected);
	});

	it('should return false when expectation incorrect expectation', () => {
		const actual = head([2, 3, 4, 'abc']);
		const expected = 2;
		assert.equal(actual, expected);
	});
});

// assertEqual(head([2, 3, 4, 'aa']), 2);
