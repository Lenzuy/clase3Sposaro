/*
Algoritmo: en programación, es un conjunto de procedimientos o funciones que se necesitan para realizar cierta operación o acción.
Los ciclos, también conocidos como bucles o iteraciones son un medio rápido y sencillo para hacer algo repetidamente.
*/

// Ejemplo 1
// El ciclo suma de dos en dos, tantas veces el numeroRandom ingresado en el prompt inicial.
//debugger;

let numeroRandom = parseInt(prompt("Ingrese un número mayor a 1"));
console.log("Suma de dos en dos");
for (let i = 0; i < numeroRandom; i++) {
  let suma = numeroRandom + 2 * i;
  console.log(suma);
}

// Ejemplo 2
// El ciclo encadena en la consola el texto ingresado cada vez, hasta que el usuario mediante "ESC" sale del programa.
//debugger;

let textoRandom = "";
let i = "";

while (textoRandom !== "ESC") {
  textoRandom = prompt("Ingrese un Texto");
  i = i + " " + textoRandom;

  if (textoRandom === "ESC") {
    alert("Ha Salido del Programa de Texto");
  } else {
    console.log(i);
  }
}

//Ejemplo 3
// El ciclo muestra en consola el Mensaje "Hola" la cantidad de veces que escoja el usuario.
// debugger;

let numeroDeVeces = parseInt(
  prompt("Ingrese la Cantidad de Veces que Quiera ver el Mensaje")
);

for (let i = 1; i <= numeroDeVeces; i++) {
  console.log("Ciclo N° " + i + " Hola");
}
