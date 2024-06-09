"use strict";

let price = 100;
let shippingCost;
if (price > 50) {
  shippingCost = 0;
} else {
  shippingCost = 5;
}
console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0
