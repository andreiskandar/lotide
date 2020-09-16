const letterPositions = (sentence) => {
	const results = {};
	let tempArrayIdx = [];

	//remove space and split characters from sentence
	const newStr = sentence.replace(/\s/g, (char) => char.replace(char, '')).split('');

	// created set key for each character
	const setStr = [...new Set(newStr)];

	// find the index of char then push it into array
	const newMap = setStr.map((char) => {
		let array = newStr.map((charInSentence, idx) => {
			if (char === charInSentence) {
				tempArrayIdx.push(idx);
			}
		});
		//assign char keys and display index of char into array
		results[char] = tempArrayIdx;
		// reset tempArrayIdx
		tempArrayIdx = [];
	});
	// return results;

	//TRY USING indexOF
	const retValObj = {};
	setStr.forEach((char) => {
		let retVal = [];
		let nextIndex = newStr.indexOf(char);
		while (nextIndex !== -1) {
			retVal.push(nextIndex);
			nextIndex = newStr.indexOf(char, retVal[retVal.length - 1] + 1);
		}

		retValObj[char] = retVal;
		retVal = [];
	});

	return retValObj;
};

console.log(letterPositions('lighthouse in the house'));

module.exports = letterPositions;
