"use strict";

let big3 = 1000n + 20;
// -> Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

let big4 = 1000n / 0n; // -> Uncaught RangeError: Division by zero
