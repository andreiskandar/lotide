const assertEqual = (actual, expected) => {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
	}
};

function countLetters(str) {
	//remove space
	const newStr = str.replace(/\s/g, char => char.replace(char, ''));
	const tally = {};
	for (let char of newStr) {
		tally[char] = (tally[char] || 0) + 1;
	}
	return tally;
	// return newStr.split('').reduce((tally, char) => {
	// 	tally[char] = (tally[char] || 0) + 1;
	// 	return tally;
	// }, {});
}

console.log(countLetters('lighthouse in the house'));
