"use strict";

let a = 10;

try {
  a = b; // Primer ReferenceError
} catch (error) {
  console.log(b); // Segundo ReferenceError
}

console.log("¡Finalmente!");
