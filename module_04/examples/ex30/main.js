"use strict";

let i = 0;
// Un bucle infinito
while (true) {
  console.log(i++);
  if (i >= 5) {
    break;
  }
}

alert(`Se salio del bucle con un break (${i}).`);
