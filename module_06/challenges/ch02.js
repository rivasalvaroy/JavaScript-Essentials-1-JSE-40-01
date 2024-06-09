"use strict";

let numbers = [10, 40, 0, 20, 50];

function div(a, b) {
  if (b == 0) {
    throw new RangeError("No se puede dividir entre 0");
  }
  return a / b;
}

for (let i = 0; i < numbers.length; i++) {
  let result;
  try {
    result = div(1000, numbers[i]);
  } catch (e) {
    result = e.message;
  }
  console.log(result);
}
