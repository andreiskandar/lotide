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

module.exports = takeUntil;
