const prompt = require('prompt-sync')();


let letra = "";
do {
letra = prompt("Ingrese la letra F en mayúscula:");
} while (letra !== "F");

console.log("Lo lograste!");