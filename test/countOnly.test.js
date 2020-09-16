const _ = require('../index');
const assert = require('chai').assert;

describe('#countOnly()', () => {
  const firstNames = [
    'Karl',
    'Salima',
    'Agouhanna',
    'Fang',
    'Kavith',
    'Jason',
    'Salima',
    'Fang',
    'Joe',
  ];

  it('should return Jason: 1 when given Jason: 1', () => {
    const actual = _.countOnly(firstNames, { Jason: true, Karima: true, Fang: true }).Jason;
    const expected = 1;
    assert.equal(actual, expected);
  });

  it('should return Karima: undefined when given Karima: undefined', () => {
    const actual = _.countOnly(firstNames, { Jason: true, Karima: true, Fang: true }).Karima;
    const expected = undefined;
    assert.equal(actual, expected);
  });

  it('should return Fang: 2 when given Fang: 2', () => {
    const actual = _.countOnly(firstNames, { Jason: true, Karima: true, Fang: true }).Fang;
    const expected = 2;
    assert.equal(actual, expected);
  });
});
