"use strict";

function showMessage(message) {
  console.log(`Mensaje: ${message}`);
}

let sm = showMessage;

sm("¡Esto funciona!"); // -> Mensaje: ¡Esto funciona!
console.log(typeof sm); // -> function
