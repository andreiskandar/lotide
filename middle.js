const eqArrays = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;
	return arr1.every((el, index) => el === arr2[index]);
};

const assertArraysEqual = (arr1, arr2) => {
	return eqArrays(arr1, arr2)
		? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
		: console.log(`🛑🛑🛑 Assertion Failed: "${arr1}" !== "${arr2}"`);
};

const middle = (arr) => {
	return arr.length === 1 || arr.length === 2
		? []
		: isOdd(arr)
		? arr[Math.floor(arr.length / 2)]
		: [arr[arr.length / 2 - 1], arr[arr.length / 2]];
};

const isOdd = (arr) => {
	return arr.length % 2 === 1;
};

console.log(middle([1, 2, 3, 4, 5]));
const array = [1, 'two', { a: 1 }, 4];
const mid = [...middle(array)];
console.log(mid);
assertArraysEqual(mid, ['two', { a: 1 }]);
