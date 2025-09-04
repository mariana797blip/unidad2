console.log("Hola mundo");

//Array:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers);


//length array:
console.log(`El tamaño del array es: ${numbers.length}`);
console.log(`Primer elemento del arreglo: ${numbers[0]}`);
console.log(`Último elemento del arreglo: ${numbers[numbers.length - 1]}`);

//Reto 1: Arreglo de frutas
let fruits = ["pera", "uva", "fresa", "mandarina", "manzana"];
console.log(fruits);

//Cositas

for (let i = 10; i >= -10; i -=2) {
    console.log(i);
}

//Reto:
console.log("números del 15 al 75 de 5 en 5");
let iterator = 15;
while (iterator <= 75) {
    console.log(iterator);
    iterator += 5;
}