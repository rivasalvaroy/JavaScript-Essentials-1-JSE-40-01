"use strict";

function add(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return NaN;
  }
  return a + b;
}

function sub(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return NaN;
  }
  return a - b;
}

function mult(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    return NaN;
  }
  return a * b;
}

console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN
