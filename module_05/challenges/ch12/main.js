"use strict";

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];
let showContact = function (contacts, i) {
  if (contacts instanceof Array && contacts[i]) {
    console.log(
      `${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`
    );
  }
};

let showAllContacts = function (contacts) {
  if (contacts instanceof Array) {
    for (let contact of contacts) {
      console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    }
  }
};

let addNewContact = function (contacts, name, phone, email) {
  if (contacts instanceof Array && name && phone && email) {
    contacts.push({
      name: name,
      phone: phone,
      email: email,
    });
  }
};

while (true) {
  let action = prompt(
    "Elige una acción: show (first), show (last), show (all), add (new), (quit)"
  );
  if (action === "quit") {
    break;
  }
  switch (action) {
    case "first":
      showContact(contacts, 0);
      break;
    case "last":
      showContact(contacts, contacts.length - 1);
      break;
    case "all":
      showAllContacts(contacts);
      break;
    case "new":
      addNewContact(
        contacts,
        prompt("Ingresar nombre: "),
        prompt("Ingresar telefono: "),
        prompt("Ingresar correo: ")
      );
      break;
  }
}
