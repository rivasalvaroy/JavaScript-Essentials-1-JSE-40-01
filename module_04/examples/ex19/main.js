"use strict";

let isOver = false;
let counter = 1;

while (!isOver) {
  isOver = !confirm(`[${counter++}] ¿Continuar en el bucle?`);
}
