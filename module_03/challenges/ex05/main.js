"use strict";

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "egestas@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@vallis.edu",
  },
];

contacts.push({
  name: prompt("Ingresa el nombre del usuario"),
  phone: prompt("Ingresa el teléfono del usuario"),
  email: prompt("Ingresa el correo del usuario"),
});

let last = contacts.length - 1;

console.log(
  `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`
);
console.log(
  `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`
);
