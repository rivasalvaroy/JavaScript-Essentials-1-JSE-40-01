"use strict";

let upperLimit = Number(prompt("Ingresa limite superior"));
let lowerLimit = Number(prompt("Ingresa limite inferior"));

if (
  !Number.isNaN(upperLimit) &&
  !Number.isNaN(lowerLimit) &&
  upperLimit > lowerLimit
) {
  for (let i = upperLimit; i >= lowerLimit; i -= 10) {
    console.log(i);
  }
}
