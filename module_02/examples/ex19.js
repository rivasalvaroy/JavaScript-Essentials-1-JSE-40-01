"use strict";

let counter = 100;

function testFunction() {
  let counter = 200;
  console.log(counter);
}

console.log(counter);
testFunction();
console.log(counter);
