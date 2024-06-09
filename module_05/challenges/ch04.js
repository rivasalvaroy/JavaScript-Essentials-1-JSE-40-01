"use strict";

let numbers = [50, 10, 40, 30, 20];

console.log(
  numbers.sort(function (a, b) {
    return a - b;
  })
);
