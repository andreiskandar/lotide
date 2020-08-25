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

// console.log(countLetters('lighthouse in the house'));
// { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }

module.exports = countLetters;
