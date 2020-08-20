const words = ['ground', 'control', 'to', 'major', 'tom'];

const assertEqual = (actual, expected, behaviour) => {
	if (behaviour(actual, expected)) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
	}
};

const eqArrays = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;
	return arr1.every((el, index) => el === arr2[index]);
};

const map = (array, callback) => {
	const results = [];
	for (let item of array) {
		results.push(callback(item));
	}
	return results;
};

const getFirstLetter = str => {
	return str[0];
};

const getLastLetter = str => {
	return str[str.length - 1];
};

const getThirdLetter = str => {
	return str[2];
};

console.log(map(words, getThirdLetter));

assertEqual(map(words, getFirstLetter), ['g', 'c', 't', 'm', 't'], eqArrays);
assertEqual(map(words, getLastLetter), ['d', 'l', 'o', 'r', 'm'], eqArrays);
assertEqual(
	map(words, getThirdLetter),
	['o', 'n', undefined, 'j', 'm'],
	eqArrays
);
