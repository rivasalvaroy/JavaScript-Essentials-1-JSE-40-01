"use strict";

let b = true + false;
let n = 100 + 200;
let bi = 100n + 200n;
let s = "He" + "llo";
let u = undefined + undefined;

console.log(`${b} [${typeof b}]`); // !!! number
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`); // !!! number
