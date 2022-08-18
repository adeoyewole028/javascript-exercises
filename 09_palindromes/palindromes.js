const palindromes = function (string) {
  // set the string to lowercase and use regExp to remove unwanted characters
  let removeWithReg = /[\W_]/g;
  let low = string.toLowerCase().replace(removeWithReg, "");
  // set the string to an array of characters reverse and join them back together to create a new string
  let rev = low.split("").reverse().join("");
  // if the new string is the same as the original string, return true, else return false
  return low === rev;
};

// Do not edit below this line
module.exports = palindromes;
