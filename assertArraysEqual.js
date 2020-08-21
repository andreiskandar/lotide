const eqArrays = (arr1, arr2) => {
	//check the length arr1 & arr2
	if (arr1.length !== arr2.length) return false;
	return arr1.every((el, index) => el === arr2[index]);
};

const assertArraysEqual = (arr1, arr2) => {
	return eqArrays(arr1, arr2)
		? console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`)
		: console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
};

assertArraysEqual([1, 2, 3], [1, '2', 3]);
assertArraysEqual([1, true, 3], [1, '2', 3]);
