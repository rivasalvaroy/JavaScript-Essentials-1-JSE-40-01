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
    email: "posuera@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

while (true) {
  let action = prompt(
    "Elegir acción: mostrar (primero), mostrar (ultimo), mostrar (todos), agregar (nuevo), (salir)"
  );
  if (action === "salir") {
    break;
  }
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
    case "todos":
      for (let contact of contacts) {
        console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
      }
      break;
    case "nuevo":
      let name = prompt("Ingresar nombre");
      let phone = prompt("Ingresar teléfono");
      let email = prompt("Ingresar correo");
      if (name && phone && email) {
        contacts.push({
          name: name,
          phone: phone,
          email: email,
        });
      }
      break;
  }
}
