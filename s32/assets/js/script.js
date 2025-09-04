console.log("Hola mundo");

class Person {
  #cellphone;

  constructor(firstName, lastName, age, height, weight, hobbies, cellphone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.hobbies = hobbies;
    this.#cellphone = cellphone;
  }
  sayHello() {
    console.log("hola desde el metodo :p");
  }
  introduce() {
    console.log(
      `Hola buenas noches, me llamo ${this.firstName} ${this.lastName} y tengo ${this.age} años`
    );
  }

  showCellphone() {
    return this.#cellphone;
  }
}

let person1 = new Person(
  "Mariana",
  "Briceño",
  16,
  1.55,
  40,
  ["escuchar música", "leer", "jugar jueguitos"],
  "123-456-7890"
);
console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.height);
console.log(person1.weight);
console.log(person1.hobbies);

person1.sayHello();
person1.introduce();

console.log(person1.showCellphone());

class Chef extends Person {
  constructor(
    firstName,
    lastName,
    age,
    height,
    weight,
    hobbies,
    cellphone,
    restaurant,
    favoriteFood
  ) {
    super(firstName, lastName, age, height, weight, hobbies, cellphone);
    this.restaurant = restaurant;
    this.favoriteFood = favoriteFood;
  }

  cook() {
    console.log(
      `El chef ${this.firstName} esta cocinando ${this.favoriteFood}`
    );
  }
}

let chef1 = new Chef(
  "Alfredo",
  "Linguini",
  27,
  1.75,
  70,
  ["cocinar", "comer", "tener ratas"],
  "987-654-3210",
  "Gusteau's",
  "ratatouille"
);

console.log(chef1);
console.log(chef1.firstName);
console.log(chef1.lastName);
console.log(chef1.age);
console.log(chef1.height);
console.log(chef1.weight);
console.log(chef1.hobbies);
console.log(chef1.restaurant);
console.log(chef1.favoriteFood);
