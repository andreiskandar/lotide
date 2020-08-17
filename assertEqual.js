const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

assertEqual('lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual(1, '1');
assertEqual('test', 'TEST');
assertEqual('Asd', 'aSD');
