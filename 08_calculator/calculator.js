const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++ ){
    total += arr[i];
  }
  
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++ ){
    total *= arr[i];
  }
  
  return total;
};

const power = function(a, b) {
	return Math.pow(a , b);
};

const factorial = function(x) {
	if (x == 0 || x == 1){
    return 1;
  }
  let total = 1;
  while (x > 0){
    total *= x;
    x--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
