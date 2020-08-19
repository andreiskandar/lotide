const assertEqual = (actual, expected) => {
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

// check if the value is an array (array.isArray)

const eqObjects = (object1, object2) => {
	//compare data types and length of its keys
	if (
		typeof object1 !== typeof object2 ||
		Object.keys(object1).length !== Object.keys(object2).length
	)
		return false;

	for (let item in object1) {
		//is there better way to check hasOwnProperty in one pass
		if (!object2.hasOwnProperty(item) && object1[item] !== object2[item])
			return false;

		// check if the value is an array
		if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
			//if it is an array, use function eqArrays for comparison
			return eqArrays(object1[item], object2[item]);
		}
	}
	//if all checks pass, toggle pass to true then return it
	return true;
};

const obj1 = { a: 1, b: 2 },
	obj2 = { b: 2, a: 1 };

console.log('primitive value', eqObjects(obj1, obj2));

const objWithArray1 = { c: '1', d: ['2', 3] },
	objWithArray2 = { d: ['2', 3, 4], c: '1' };

console.log('value with an array: ', eqObjects(objWithArray1, objWithArray2));
