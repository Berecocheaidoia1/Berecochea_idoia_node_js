const prompt = require('prompt-sync')();

var a = prompt("Ingrese un string:  ")
var b = prompt("Ingrese un string:  ")

let iguales = a === b;
let longitud = a.length === b.length;  //let para recorrer el codigo, length para saber la longitud del string

console.log("¿Los strings son iguales? " +iguales)
console.log("¿Los strings tienen la misma longitud? " +longitud)


//