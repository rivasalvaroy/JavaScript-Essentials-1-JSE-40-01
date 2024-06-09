"use strict";

let isUserReady = confirm("¿Estás listo?");

if (isUserReady) {
  console.log("¡Usuario listo!");
}

if (isUserReady == false) {
  console.log("¡Usuario no esta listo!");
}
