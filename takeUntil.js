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

const takeUntil = (array, callback) => {
	const outputArr = [];
	for (let el of array) {
		if (callback(el)) {
			break;
		}
		outputArr.push(el);
	}

	return outputArr;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const result1 = takeUntil(data1, x => x < 0);

const data2 = [
	"I've",
	'been',
	'to',
	'Hollywood',
	',',
	"I've",
	'been',
	'to',
	'Redwood',
];
const results2 = takeUntil(data2, x => x === ',');

console.log(result1);
console.log('----------');
console.log(results2);

assertEqual(result1, [1, 2, 5, 7, 2], eqArrays);

assertEqual(results2, ["I've", 'been', 'to', 'Hollywood'], eqArrays);
