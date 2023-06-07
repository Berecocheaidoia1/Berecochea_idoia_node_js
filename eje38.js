const prompt = require('prompt-sync')();


var cadena = prompt("ingrese una cadena de texto: ")

function palindrome(cadena) {
    cadena = cadena.toLowerCase().replace(/\s/g, '');
  
   
    console.log (cadena === cadena.split('').reverse().join(''));  // Comparamos la cadena con su reverso
}
   palindrome(cadena);