"use strict";

const num = 42;

const strFromNum1 = String(num);
const strFromNum2 = String(8);
const strFromBool = String(true);
const numFromStr = Number("312");
const boolFromNumber = Boolean(0);

console.log(typeof strFromNum1);
console.log(typeof strFromBool);
console.log(typeof numFromStr);
console.log(typeof boolFromNumber);
