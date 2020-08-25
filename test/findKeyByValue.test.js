const _ = require('../index');
const assert = require('chai').assert;

describe('#findKeyByValue()', () => {
	const bestTVShowsByGenre = {
		sci_fi: 'The Expanse',
		comedy: 'Brooklyn Nine-Nine',
		drama: 'The Wire',
	};

	it("should return 'drama' when given obj: { sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire' }", () => {
		const actual = _.findKeyByValue(bestTVShowsByGenre, 'The Wire');
		const expected = 'drama';
		assert.equal(actual, expected);
	});

	it("should return 'drama' when given obj: { sci_fi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama: 'The Wire' }", () => {
		const actual = _.findKeyByValue(bestTVShowsByGenre, 'That "70s Show');
		const expected = [];
		assert.deepEqual(actual, expected);
	});
});
