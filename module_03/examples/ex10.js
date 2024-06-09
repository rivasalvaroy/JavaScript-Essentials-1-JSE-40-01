"use strict";

const a = false;
const b = true;
const c = false;
const d = true;

console.log((a && b && c) || d); // -> true
console.log(a && b && (c || d)); // -> false
