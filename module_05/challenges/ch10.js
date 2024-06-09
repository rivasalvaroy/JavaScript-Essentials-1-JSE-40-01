"use strict";

let fibbRec = (n) =>
  n == 0 ? 0 : n == 1 ? 1 : fibbRec(n - 1) + fibbRec(n - 2);

console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13
