//Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores,
// incluso ese mismo.
//Ejemplo: 
//sumattion(3) debe retornar 6 porque hace (1 +2 +3)
//sumattion(8) debe retornar 36


const prompt = require('prompt-sync')();

var num = prompt("ingrese un numero: ")
function sumattion(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    console.log(sum) ;
}
  sumattion(num);

  //