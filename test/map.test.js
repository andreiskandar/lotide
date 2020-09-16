const _ = require('../index');
const assert = require('chai').assert;

describe('#map()', () => {
  const words = ['ground', 'control', 'to', 'major', 'tom'];
  const getFirstLetter = str => {
    return str[0];
  };

  const getLastLetter = str => {
    return str[str.length - 1];
  };

  it("should return ['g', 'c', 't', 'm', 't'] when given getFirstLetter from ['ground', 'control', 'to', 'major', 'tom']", () => {
    const actual = _.map(words, getFirstLetter);
    const output = ['g', 'c', 't', 'm', 't'];
    assert.deepEqual(actual, output);
  });
  it("should return ['d', 'l', 'o', 'r', 'm'] when given getLastLetter from ['ground', 'control', 'to', 'major', 'tom']", () => {
    const actual = _.map(words, getLastLetter);
    const output = ['d', 'l', 'o', 'r', 'm'];
    assert.deepEqual(actual, output);
  });
});
