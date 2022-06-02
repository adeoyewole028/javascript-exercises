const reverseString = function (string) {
  let splitting = string.split("");
  let reverse = splitting.reverse();
  let joining = reverse.join("");
  let str = joining.toString();
  return str;
};

// Do not edit below this line
module.exports = reverseString;
