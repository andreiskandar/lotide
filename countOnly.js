const assertEqual = (actual, expected) => {
	if (actual === expected) {
		console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
	} else {
		console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
	}
};

const countOnly = function (allItems, itemsToCount) {
	const tallyItems = allItems.reduce((tally, item) => {
		tally[item] = (tally[item] || 0) + 1;
		return tally;
	}, {});

	const result = {};
	for (let item in itemsToCount) {
		if (itemsToCount[item] && tallyItems.hasOwnProperty(item)) {
			result[item] = tallyItems[item];
		}
	}
	return result;
};

const firstNames = ['Karl', 'Salima', 'Agouhanna', 'Fang', 'Kavith', 'Jason', 'Salima', 'Fang', 'Joe'];

const result1 = countOnly(firstNames, {
	Jason: true,
	Karima: true,
	Fang: true,
});

assertEqual(result1['Jason'], 1);
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);
