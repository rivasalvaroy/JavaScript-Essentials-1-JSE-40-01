"use strict";

let names = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names.length); // -> 4

let last_name = names.pop();
console.log(names.length); // -> 3
console.log(last_name); // -> Samuel
console.log(names); // -> ["Olivia", "Emma", "Mateo"]
