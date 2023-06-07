//Crear una función llamada “arregloDeObjetos” que reciba un número como
//parámetro y devuelva un arreglo de objetos que tengan una propiedad llamada “valor” que contenga el valor del número y sus anteriores

const prompt = require('prompt-sync')();

var num = prompt("ingrese un numero: ") 
function arregloDeObjetos(num) {
    
    const arr = [];
                                        
    for (let i = 0; i <= num; i++) {  // Iterar desde 0 hasta el número recibido
                                       
      const obj = {
        valor: i
      };
      
      arr.push(obj);
    }
    
    console.log(arr) ;
}
    arregloDeObjetos(num)
//
  