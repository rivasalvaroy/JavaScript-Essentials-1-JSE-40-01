"use strict";

let gate = prompt("Elige una puerta: a, b, o c");
let win = false;

switch (gate) {
  case "a":
    alert("Puerta A: Vacía");
  case "b":
    alert("Puerta B: Premio Mayor");
    win = true;
  case "c":
    alert("Puerta C: Vacía");
  default:
    alert("No existe la puerta " + String(gate));
}

if (win) {
  alert("¡Ganador!");
}
