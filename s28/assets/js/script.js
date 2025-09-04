console.log("Archivo vinculado");

//Reto 1:
function showNumbers() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  console.log(7);
  console.log(8);
  console.log(9);
  console.log(10);
}
//Llamada 1:
showNumbers();
//Llamada 2:
showNumbers();

function addTwoNumbers(x, y) {
  console.log(`Primer parametro: ${x}`);
  console.log(`Segundo parametro: ${y}`);
  let result = x - y;
  console.log(`El resultado de ${x} - ${y} es: ${result}`);
}

addTwoNumbers(20, 5); //defino mis parametros en la llamada

function greet(targetName) {
  let message = `Hola ${targetName}, espero tengas un buen día`;
  return message;
}

let name = "Mariana";
//Al retonar un valor, podemos alamacenarlo
let greetMessage = greet(name);
console.log(greetMessage);
