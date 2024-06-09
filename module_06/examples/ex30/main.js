"use strict";

function outer() {
  let name = "outer";
  let str = inner();
  return str;
}

function inner() {
  let name = "inner";
  return "¡Hola!";
}

console.log("Antes de llamar a outer()");
console.log(outer());
console.log("Despues de llamar a outer()");
