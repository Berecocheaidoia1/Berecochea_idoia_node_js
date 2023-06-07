
const prompt = require('prompt-sync')();

var cadena = prompt("ingrese una cadena de texto: ")
function determinarTipoDeCadena(cadena) {
    let mayusculas = true;
    let minusculas = true;
    
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === cadena[i].toUpperCase()) {
        minusculas  = false;
      } else if (cadena[i] === cadena[i].toLowerCase()) {
        mayusculas = false;
      }
    }
    
    if (mayusculas) {
      console.log ("La cadena está compuesta solo por letras mayúsculas");
    } else if (minusculas ) {
        console.log ("La cadena está compuesta solo por letras minúsculas");
    } else {
        console.log ("La cadena está compuesta por una combinación de letras mayúsculas y minúsculas");
    }
  }

  determinarTipoDeCadena(cadena)

  //