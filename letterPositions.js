const eqArrays = (arr1, arr2) => {
	//check the length arr1 & arr2
	if (arr1.length !== arr2.length) return false;
	return arr1.every((el, index) => el === arr2[index]);
};

const assertArraysEqual = (arr1, arr2) => {
	return eqArrays(arr1, arr2)
		? console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
		: console.log(`🛑🛑🛑 Assertion Failed: "${arr1}" !== "${arr2}"`);
};

const letterPositions = sentence => {
	const results = {};
	let tempArrayIdx = [];

	//remove space and split characters from sentence
	const newStr = sentence.replace(/\s/g, char => char.replace(char, '')).split('');

	// created set key for each character
	const setStr = [...new Set(newStr)];

	// find the index of char then push it into array
	const newMap = setStr.map(char => {
		let array = newStr.map((charInSentence, idx) => {
			if (char === charInSentence) {
				tempArrayIdx.push(idx);
			}
		});
		//assign char keys and display index of char into array
		results[char] = tempArrayIdx;
		// reset tempArrayIdx
		tempArrayIdx = [];
		return results;
	});

	//TRY USING indexOF

	return results;
};

function findNextIndex(char, currIndex, sentence) {
	return sentence.indexOf(char, currIndex + 1);
}

function storeIndexIntoArray(index) {
	let array = [];
	array.push(index);
	return array;
}

console.log(letterPositions('lighthouse in the house'));
console.log(letterPositions('ehoellhoe'));

assertArraysEqual(letterPositions('hello').e, [1]);
