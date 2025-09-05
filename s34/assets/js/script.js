console.log("Hola mundo");

let drinks = ["agua", "jugo", "limonada", "refresco", "capuchino", "smoothie"];
console.log(drinks);

//push
drinks.push("café");
console.log(drinks);

//pop
drinks.pop();
let lastItem = drinks.pop();
console.log(drinks);

//unshift y shift
drinks.unshift("chocolatada");
console.log(drinks);

drinks.shift();
console.log(drinks);

//includes
console.log(drinks.includes("jugo")); //true
console.log(drinks.includes("té")); //false

//indexOf
console.log(drinks.indexOf("jugo")); //1
console.log(drinks.indexOf("té")); //-1

//join
let drinksString = drinks.join();
console.log(drinksString);

//Indicandole otro carácter a join
console.log(drinks.join("+"));
console.log(drinks.join("-"));
console.log(drinks.join(" "));
console.log(drinks.join("*"));

//join vuelve todo una string
let randomArray = [1, "palabras", true, false, 77.6];
console.log(randomArray.join());

//slice(incio,fin)
let slicedDrinks = drinks.slice(2); //desde el índice 2 hasta el final
console.log(slicedDrinks);

console.log(drinks.slice(1, 3)); //desde el índice 1 hasta el 3 (el 3 no se incluye)

//splice D:
drinks.splice(2, 3, "limonada cherry", "fresa con leche"); //desde el índice 2 elimina 2 elementos
console.log(drinks);

console.log("====================================");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);

//map
let numsMap = nums.map((x) => x * 2);
console.log(numsMap);

let numsToString = nums.map((x) => `Número ${x}`);
console.log(numsToString);

//filter
let filteredNums = nums.filter((x) => x % 2 === 0);
console.log(filteredNums);

//reduce
let sumOfAllElements = nums.reduce((a, b) => a + b, 0);
console.log(sumOfAllElements);

let productOfAllElements = nums.reduce((a, b) => a * b, 1);
console.log(productOfAllElements);

//Math round
console.log(Math.round(4.6)); //5
console.log(Math.round(4.4)); //4

//Math ceil
console.log(Math.ceil(8.2)); //9

//Math floor
console.log(Math.floor(8.2)); //8
