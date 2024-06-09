"use strict";

function doNothing() {
  return undefined;
}

let a = doNothing(); // asignar el resultado de la llamada de función
let b = doNothing; // asignar una función

console.log(typeof a); // -> undefined
console.log(typeof b); // -> function
