const assertEqual = (actual, expected) => {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
	}
};

const bestTVShowsByGenre = {
	sci_fi: 'The Expanse',
	comedy: 'Brooklyn Nine-Nine',
	drama: 'The Wire',
};

const findKeyByValue = (obj, titleName) => {
	// Object.keys & Object.values
	const keys = Object.keys(obj),
		titles = Object.values(obj);

	//using for loop
	// for (let i = 0; i < titles.length; i++) {
	//   if (titles[i] === titleName) {
	//     return genre[i];
	//   }
	// }

	//using filter
	return keys.filter(genre => obj[genre] === titleName);

	// for (const genre in obj) {
	// 	if (obj[genre] === title) return genre;
	// }
};
console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));
// assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
