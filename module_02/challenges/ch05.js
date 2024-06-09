"use strict";

let b1 = Boolean(BigInt(Number("1234")));
console.log(`${b1} [${typeof b1}]`);

// or

let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let b2 = Boolean(bi);
console.log(`${b2} [${typeof b2}]`);
