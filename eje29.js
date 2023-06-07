
//29 - Crear una función llamada “contarHasta” que pide un número positivo por consola y retorna una lista con los números desde el 0
// hasta el número recibido.
//Utilizar el bucle While para hacerlo. 


const prompt = require('prompt-sync')();

function contarHasta() {
    let num = prompt("Ingresa un número positivo:");
    let numeros = [];
    let i = 0;
    while (i <= num) {
      numeros.push(i);
      i++;
    }
    console.log(numeros) ;
}

contarHasta();

//