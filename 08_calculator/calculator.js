const add = function(a, b) {
  return a + b;
}

const subtract = function(a, b) {
  return a - b;
}

const sum = function() {
  const arg_arrays = Array.from(arguments).flat();
	const res = arg_arrays.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return res;
}

const multiply = function() {
  arg_arrays = Array.from(arguments).flat();
  console.log(arg_arrays);
	const res = arg_arrays.reduce((total, currentItem) => {
    return total * Number(currentItem);}, 1);
  return res;
};


const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  res = 1
  for (let i = 1; i <= a; i++){
    res *= i;

  }

  return res;

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
