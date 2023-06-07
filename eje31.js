///Crear una nueva versión de la función “esPrimo” utilizando el bucle While la cual va a determinar si el número 
//que ingresa el usuario es primo o no. Recordar que un número primo es el que solo puede dividirse por sí mismo y por la unidad.
//Pista: Puedes utilizar break para detener la ejecución de las iteraciones cuando sea necesario.

const prompt = require('prompt-sync')();

var numero = prompt("ingresar un numero: ") 

function esPrimo(numero) {
    if (numero <= 1) {
        console.log (false);
    }
  
    let divisor = 2;
    while (divisor < numero) {
      if (numero % divisor === 0) {

    }else if (numero <= 1) {

        console.log (false)
       
      }
      divisor++;
    }
    console.log(true);
  }
esPrimo(numero)