
// Pedir por prompt una número y luego crear una función que nos diga si dicho número es divisible por 5 o no. Mostrar el resultado en la consola.


const prompt = require('prompt-sync')();

var num = prompt("ingrese un numero: ")

if (num % 5 == 0){
    console.log("Es divisible por 5")

} else {

    console.log("No es divisible por 5")

}

//