console.log("Hola mundo");

//Suma
let sumando1 = 8;
let sumando2 = 4;

console.log(sumando1);
console.log(sumando2);

console.log(sumando1 + sumando2);

let resultadoSuma = sumando1 + sumando2;
console.log(resultadoSuma);

// Resta
let minuendo = 5;
let sustraendo = 20;
let resta = minuendo - sustraendo;

console.log("RESULTADO RESTA");
console.log(resta);

// Multiplicación
let factor1 = 20;
let factor2 = 34;
let producto = factor1 * factor2;

console.log("RESULTADO MULTIPLICACIÓN");
console.log(producto);

// División
let dividendo = 12;
let divisor = 6;
let cociente = dividendo / divisor;

console.log("RESULTADO DIVISIÓN");
console.log(cociente);

// Operación combinada
console.log("OPERACIÓN COMBINADA");
console.log(15 + 43 / 4 + 8 + 2);

//Módulo %: es el residuo de una división
let moduloNum1 = 12;
let moduloNum2 = 5;
let resultadoModulo = moduloNum1 % moduloNum2;

console.log("RESALTADO MÓDULO");
console.log(resultadoModulo);

//Potencia
let base = 9;
let exponente = 2;
let resultadoPontencia = base ** exponente;

console.log("RESULTADO PONTENCIA");
console.log(resultadoPontencia);

console.log("=================");
// Comparamos
let valor1 = 8;
let valor2 = 1;

let mayorQue = valor1 > valor2;
console.log(mayorQue);
console.log(valor1 < valor2);
console.log(valor1 >= valor2);
console.log(valor1 <= valor2);

console.log("=================");

//Igualdad
let datoNumber = 1; //number
let datoString = "1"; //string
console.log(datoNumber == datoString); //true

//Identidad
console.log(datoNumber === datoString); //false

//Diferentes (! Negación de la igualdad o identidad)
console.log(datoNumber != datoString); //false
console.log(datoNumber !== datoString); //true

console.log("=================");

//OPERADORES LÓGICOS completaaarrrrrrrrrrrrrrrrrrrrrrr
console.log("=================");

//And
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false

//Or
console.log(true || true); //true
console.log(true || false); //true
console.log(false || false); //false

//Not
console.log(!true); //false
console.log(!false); //true

console.log("=================");

//Comillas Simples ''
let simples = "String entre comillas simples";
console.log(simples);

//Comillas dobles ""
let dobles = "String entre comillas dobles";
console.log(dobles);

//Backticks
let backticks = `String entre backticks`;
console.log(backticks);

//Interpolar strings: Ingresar variables directamente dentro de la string
let nombreCompleto = "Mariana :p";
let saludo = `Mi nombre es ${nombreCompleto}`;
console.log(saludo);

//String multilinea
let frase = `1
2
3
4`;
console.log(frase);

//Matacaracteres:
frase = "Hola \n cómo estás?";
console.log(frase);

let miguelGrau = 'Miguel Grau "El Caballero de los Mares"';
console.log(miguelGrau);

//Accediendo último elemento
let palabra = "Hola";
console.log(palabra);

console.log(palabra[0]);
console.log(`Tamaño de la string ${palabra} = ${palabra.length}`);
console.log(`Último caracter ${palabra[palabra.length - 1]}`);
