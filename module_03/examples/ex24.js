"use strict";

let user = {
  name: "Alice",
  age: 38,
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); // -> undefined
