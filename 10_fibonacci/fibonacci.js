const fibonacci = function(int) {
  if (int < 0) {
    return "OOPS";
  } else if (int === 0) {
    return 0;
  } else if (int == 1) {
    return 1;
  } else {
    return fibonacci(int - 1) + fibonacci(int - 2);
  }
};

// Do not edit below this line
module.exports = fibonacci;
