const tail = require('../tail.js');
const assertEqual = require('../assertEqual');

assertEqual(tail([92, 3, 4, 4]), 4);
