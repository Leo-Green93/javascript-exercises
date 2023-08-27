const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	let sum = 0
  for (let i = 0; i < arr.length; i++) {
  sum += arr[i]
  } return sum

};

const multiply = function(arr) {
let result = 1;
for (let i = 0; i < arr.length; i++) {
result *= arr[i]
}
  return result
};

const power = function(num1, num2) {
	return Math.pow(num1, num2)
};

const factorial = function(num) {
	let factorial = 1
  if (num === 0) {
    return 1
  } else {
    for (let i = num; num > 0; num--)
    factorial *= num 
  } return factorial;
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
