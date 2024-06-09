"use strict";

let nr = 0;
let year = 1970;
let firstName = "Alice";
let empty = "";

console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!firstName); // -> false
console.log(!empty); // -> true

console.log(!!nr); // -> false
console.log(!!firstName); // -> true
