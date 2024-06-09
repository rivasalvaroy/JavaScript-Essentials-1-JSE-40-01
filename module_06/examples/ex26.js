"use strict";

function factorial(n) {
  if (n > 20) {
    throw new RangeError("Valor máximo 20");
  }
  let result = 1;
  for (; n > 1; n--) {
    result = result * n;
  }
  return result;
}

console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Uncaught RangeError: Valor máximo 20
