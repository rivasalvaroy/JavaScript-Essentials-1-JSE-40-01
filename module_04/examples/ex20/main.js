"use strict";

let isOver;
let counter = 1;

do {
  isOver = !confirm(`[${counter++}] ¿Continuar en el bucle?`);
} while (!isOver);
