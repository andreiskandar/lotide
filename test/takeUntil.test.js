const _ = require('../index');
const assert = require('chai').assert;

describe('#takeUntil()', () => {
	it('should return [1, 2, 5, 7, 2] when given data = [1, 2, 5, 7, 2, -1, 2, 4, 5] and callback x => x < 0', () => {
		const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
		const actual = _.takeUntil(data, x => x < 0);
		const expected = [1, 2, 5, 7, 2];
		assert.deepEqual(actual, expected);
	});

	it("should return ['I've', 'been', 'to', 'Hollywood'] when given data = ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'] and callback x => x === ','", () => {
		const data = ["I've", 'been', 'to', 'Hollywood', ',', "I've", 'been', 'to', 'Redwood'];
		const actual = _.takeUntil(data, x => x === ',');
		const expected = ["I've", 'been', 'to', 'Hollywood'];
		assert.deepEqual(actual, expected);
	});
});
