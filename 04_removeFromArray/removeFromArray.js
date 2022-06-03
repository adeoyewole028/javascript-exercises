const removeFromArray = function (...arr) {
  let array = arr[0];
  return array.filter((value) => !arr.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
