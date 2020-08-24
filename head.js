const assertEqual = require('./assertEqual');

const head = arr => {
	return arr[0];
};

assertEqual(head([1, 2, 3, 4, 5]), 1);
module.exports = head;
