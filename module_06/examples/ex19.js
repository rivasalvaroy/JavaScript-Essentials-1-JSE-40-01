"use strict";

let a = 10;

try {
  a = b; // ReferenceError
} catch (error) {
  console.log("¡Un error!");
}

console.log("¡Finalmente!");
