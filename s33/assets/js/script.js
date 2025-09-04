console.log("hola mundo");

//Seleccionamos un elemento por ID
let mainTitle = document.getElementById("main-title");
console.log(mainTitle);
//mostramos el contenido de maintitle
console.log(mainTitle.innerText);
//actualizamos el contenido dinamicamente
mainTitle.innerText = "Otro título";
console.log(mainTitle.innerText);

//getElementsByClassName ("nombre-clase") -> Otiene todos los elementos por su clase
let mainTexts = document.getElementsByClassName("main-text");
console.log(mainTexts); //esto es un array

//Accedemos a un elemento y mostramos su contenido
console.log(mainTexts[0].innerText);
mainTexts[0].innerText = "Cambio en el parraffo";

//getElementsByTagName("nombre-etiqueta") -> obtiene todos los elementos por su etiqueta
let subtitles = document.getElementsByTagName("h2");
console.log(subtitles);
console.log(subtitles[0].innerText);
console.log(subtitles[1].innerText);
console.log(subtitles[2].innerText);
subtitles[0].innerText = "Subtítulo cambiado";

//Selectores por CSS, usan sintaxis de CSS para el DOMquerySelector ("selector") -> Devuelve todos los elementos que coincidan con el selector
let queryMainTitle = document.querySelector("#main-title");
console.log(queryMainTitle);

let queryMainTexts = document.querySelectorAll(".main-text");
console.log(queryMainTexts);

//Eventos: Selecciono un elemento y le agrego un evento. No es necesario alamacenar el elemento en alguna variable.
document.getElementById("main-button").addEventListener("click", function () {
  console.log("Botón presionado");
  //Evento un poco más interactivo: cambiar estilos
  let currentBackgroundColor = document.body.style.backgroundColor;

  if (currentBackgroundColor == "red") {
    document.body.style.background = "white";
    mainButton.style.color = "white";
  } else {
    document.body.style.backgroundColor = "red";
    mainButton.style.color = "red";
  }
});
