const middle = arr => {
  const arrLen = arr.length;
  return arrLen === 1 || arrLen === 2
    ? []
    : isOdd(arr)
    ? [arr[Math.floor(arrLen / 2)]]
    : [arr[arrLen / 2 - 1], arr[arrLen / 2]];
};

const isOdd = arr => {
  return arr.length % 2 === 1;
};

module.exports = middle;
