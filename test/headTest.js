const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([2, 3, 4, 'aa']), 2);
