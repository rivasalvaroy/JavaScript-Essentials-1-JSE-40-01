"use strict";

function factorial1(n) {
  return n > 1 ? n * factorial1(n - 1) : 1;
}
console.log(factorial1(5)); // -> 120

let factorial2 = (n) => (n > 1 ? n * factorial2(n - 1) : 1);

console.log(factorial2(5)); // -> 120
