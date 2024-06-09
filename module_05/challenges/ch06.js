"use strict";

let add = (a, b) =>
  !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) =>
  !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a, b) =>
  !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

console.log(sub(12, 10)); // -> 2
console.log(mult(10, 10.1)); // -> NaN
