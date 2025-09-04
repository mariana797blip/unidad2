console.log("Hola mundo");

let nombre = "Ana";
if (nombre.length < 5) {
  console.log("Que nombre tan corto");
} else {
  console.log("Tu nombre es largo");
}

if (nombre.length < 7) {
  console.log("Que nombre tan largo tienes");
} else {
  console.log("Tu nombre no es muy largo");
}

//Reto 2:
let edad = 16;

if (edad >= 18) {
  console.log("Eres mayor de edad, puedes entrar");
} else {
  console.log("Eres menor de edad, no puedes entrar");
}

//Reto 3:
let num1 = 15;
let num2 = 4;

if (num1 > num2) {
  console.log(`${num1} es mayor que ${num2}`);
} else {
  console.log(`${num2} es menor que ${num1}`);
}

//Reto 4:
let num3 = 10;
let num4 = 7;

console.log(`Primer numero ${num3}`);
console.log(`Segundo numero ${num4}`);

if (num3 > num4) {
  console.log("El primer numero es el mayor");
} else if (num3 > num4) {
  console.log("El segundo numero es el mayor");
} else {
  console.log("Ambos son iguales");
}

//Anidación
if (edad >= 18) {
  if (estaEnUsa) {
    if (edad >= 21) {
      console.log("Eres mayor de edad en USA");
    } else {
      console.log("Eres menor de edad en USA");
    }
  } else {
    console.log("Eres mayor de edad");
  }
} else {
  console.log("Eres menor de edad");
}

//Sentencia Switch
let numeroMes = 2;
switch (numeroMes) {
  case 1: //si el valor es 1 se ejecuta este código
    console.log("Enero");
    break; //sirve para terminar la condición
  case 2: //si el valor es 2 se ejecuta este código
    console.log("Febrero");
    break;
  case 3: //si el valor es 3 se ejecuta este código
    console.log("Marzo");
    break;
  default:
    //se ejecuta si no se encontró ninguna conincidencia
    console.log("Valor no válido");
}

//Reto 5:
let numeroDia = 7;
switch (numeroDia) {
  case 1: //código a ejecutar si la expresión tiene el valor 1
    console.log("Domingo");
    break;
  case 2: //código a ejecutar si la expresión tiene el valor 2
    console.log("Sabado");
    break;
  case 3: //código a ejecutar si la expresión tiene el valor 3
    console.log("Viernes");
    break;
  case 4: //código a ejecutar si la expresión tiene el valor 4
    console.log("Jueves");
    break;
  case 5: //código a ejecutar si la expresión tiene el valor 5
    console.log("Miércoles");
    break;
  case 6: //código a ejecutar si la expresión tiene el valor 6
    console.log("Martes");
    break;
  case 7: //código a ejecutar si la expresión tiene el valor 7
    console.log("Lunes");
    break;
  default: //código a ejecutar si la expresión no coincide con ningún valor
    console.log("Día no válido");
}
