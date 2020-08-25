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
};

module.exports = findKeyByValue;
