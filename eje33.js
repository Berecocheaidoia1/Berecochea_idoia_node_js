//Crear un programa que solicite por consola al usuario que ingrese primero un número y luego otro.
// Este debe retornar el valor de la suma y preguntar al usuario si quiere repetir la operación ingresando “SI” o “NO”.
//Si el usuario ingresa “SI” el programa comienza nuevamente.
//Si el usuario ingresa “NO” el programa finaliza.
//En caso de que el usuario ingrese una cadena diferente, debe volver a realizar la pregunta hasta que el input coincida con uno de los strings “SI” o “NO”
//Pista: para este ejercicio necesitarás utilizar bucles Do While. Y se puede usar utilizar un bucle dentro de otro.
const prompt = require('prompt-sync')();

let respuesta = "SI";
do {
  let num1 = parseInt(prompt("Ingrese el primer número: "));
  let num2 = parseInt(prompt("Ingrese el segundo número: "));
  let resultado = num1 + num2;
  console.log("el resultado es: " +resultado);
  do {
    respuesta = prompt("¿Desea realizar otra operación? (SI o NO)").toUpperCase();

  } while (respuesta !== "SI" && respuesta !== "NO");
} while (respuesta === "SI");
//