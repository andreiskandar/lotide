const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
	return eqArrays(arr1, arr2)
		? console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`)
		: console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
};

module.exports = assertArraysEqual;
