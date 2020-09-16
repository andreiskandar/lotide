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

module.exports = countOnly;
