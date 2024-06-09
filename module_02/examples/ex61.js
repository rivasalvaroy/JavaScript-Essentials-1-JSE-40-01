"use strict";

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

let first_name = names.shift();
console.log(names.length); // -> 3
console.log(first_name); // -> Olivia
console.log(names); // -> ["Emma", "Mateo", "Samuel"]
