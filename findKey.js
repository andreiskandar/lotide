const findKey = (obj, callback) => {
	const keys = Object.keys(obj);
	return keys.filter(key => callback(obj[key]))[0];
};

console.log(
	findKey(
		{
			'Blue Hill': { stars: 1 },
			Akaleri: { stars: 3 },
			noma: { stars: 2 },
			elBulli: { stars: 3 },
			Ora: { stars: 2 },
			Akelarre: { stars: 3 },
		},
		x => x.stars === 2
	)
);

const assertEqual = (actual, expected, behaviour) => {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
	}
};

const eqArrays = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;
	return arr1.every((el, index) => el === arr2[index]);
};

assertEqual(
	findKey(
		{
			'Blue Hill': { stars: 1 },
			Akaleri: { stars: 3 },
			noma: { stars: 2 },
			elBulli: { stars: 3 },
			Ora: { stars: 2 },
			Akelarre: { stars: 3 },
		},
		x => x.stars === 2
	),
	'noma'
);
