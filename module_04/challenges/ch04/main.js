"use strict";

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];
let action = prompt(
  "Elegir acción: mostrar (primero), mostrar (ultimo), agregar (nuevo)"
);
let last = contacts.length - 1;

switch (action) {
  case "primero":
    console.log(
      `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`
    );
    break;
  case "ultimo":
    console.log(
      `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`
    );
    break;
  case "nuevo":
    let name = prompt("Introduce el nombre del usuario: ");
    let phone = prompt("Introduce el teléfono del usuario: ");
    let email = prompt("Introduce el correo del usuario: ");
    if (name && phone && email) {
      contacts.push({
        name: name,
        phone: phone,
        email: email,
      });
    }
    last = contacts.length - 1;
    console.log(
      `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`
    );
    break;
}
