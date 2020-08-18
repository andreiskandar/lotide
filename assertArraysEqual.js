const eqArrays = (arr1, arr2) => {
	return arr1.every((el, index) => el === arr2[index]);
};

const assertArraysEqual = (arr1, arr2) => {
	return eqArrays(arr1, arr2)
		? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
		: console.log(`🛑🛑🛑 Assertion Failed: "${arr1}" !== "${arr2}"`);
};

assertArraysEqual([1, 2, 3], [1, '2', 3]);
