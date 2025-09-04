let person = {
    name: "Mariana",
    age: 16,
    cellphone: "1234567890",
    hobbies: ["jugar jueguitos", "pintar", "escuchar música"],
};

console.log(person);

console.log(person.name);
console.log(person["age"]);
console.log(person.cellphone);
console.log(person.hobbies);

//Actualizar
person.age = 17;
console.log(person.age);

//Nuevo atributo
person.sign = "Capricornio";
console.log(person.sign);

let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }