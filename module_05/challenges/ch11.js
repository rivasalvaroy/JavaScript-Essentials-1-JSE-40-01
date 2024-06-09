"use strict";

function fibbIter(n) {
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a;
    a = b;
    b += c;
  }
  return n > 1 ? b : n > 0 ? 1 : 0;
}

console.log(fibbIter(4)); // -> 3
console.log(fibbIter(7)); // -> 13
console.log(fibbIter(0)); // -> 0
console.log(fibbIter(1)); // -> 1
