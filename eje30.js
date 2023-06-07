
//30.Crear un programa que pida al usuario que teclee un número y se repita hasta que este teclee un 0.
// Además, al finalizar mostrará por consola la suma de todos los números tecleados.

const prompt = require('prompt-sync')();
let num = 1;
let suma = 0;

while(num!=0){
    num = parseInt(prompt("ingrese un numero, y 0 para salir: "));
    suma += num;
}
console.log("suma de los numeros ingresados por tecldo: "+suma);
//