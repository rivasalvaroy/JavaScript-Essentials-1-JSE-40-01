"use strict";

let add1 = function (a, b) {
  return a + b;
};
console.log(add1(10, 20)); // -> 30

let add2 = (a, b) => {
  return a + b;
};

console.log(add2(10, 20)); // -> 30

let add3 = (a, b) => a + b;

console.log(add3(10, 20)); // -> 30
