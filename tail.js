const assertEqual = require('./assertEqual');

const tail = arr => {
	return arr.slice(1);
};
assertEqual(tail);

module.exports = tail;
