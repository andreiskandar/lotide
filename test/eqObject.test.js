const _ = require('../index');
const assert = require('chai').assert;

describe('#eqObjects()', () => {
	it('should return true when given obj1 = { a: 1, b: 2 } and obj2 = { b: 2, a: 1 }', () => {
		const obj1 = { a: 1, b: 2 },
			obj2 = { b: 2, a: 1 };
		const actual = _.eqObjects(obj1, obj2);
		const expected = true;
		assert.equal(actual, expected);
	});

	it("should return true when given objWithArray1 = { c: '1', d: ['2', 3], e: [1, 2] } and objWithArray2 = { d: ['2', 3], c: '1', e: [1, 2] }", () => {
		const objWithArray1 = { c: '1', d: ['2', 3], e: [1, 2] },
			objWithArray2 = { d: ['2', 3], c: '1', e: [1, 2] };
		const actual = _.eqObjects(objWithArray1, objWithArray2);
		const expected = true;
		assert.equal(actual, expected);
	});

	it("should return true when given objWithObject1 = { c: { test: 'objects' }, d: ['2', 3], a: 1 } and objWithObject2 = { d: ['2', 3], c: { test: 'objects' }, a: 1 } ", () => {
		const objWithObject1 = { c: { test: 'objects' }, d: ['2', 3], a: 1 },
			objWithObject2 = { d: ['2', 3], c: { test: 'objects' }, a: 1 };
		const actual = _.eqObjects(objWithObject1, objWithObject2);
		const expected = true;
		assert.equal(actual, expected);
	});
});
