const assertEqual = require('./assertEqual.js');

const eqArrays = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		const areArrays = Array.isArray(arr1[i]) && Array.isArray(arr2[i]);
		const areNotArrays = !Array.isArray(arr1[i]) && !Array.isArray(arr2[i]);
		const areNotEqual = arr1[i] !== arr2[i];
		if (
			(areArrays && !eqArrays(arr1[i], arr2[i])) ||
			(areNotArrays && areNotEqual) ||
			(!areArrays && !areNotArrays)
		) {
			return false;
		}
	}
	return true;
};

module.exports = { eqArrays, assertEqual };
