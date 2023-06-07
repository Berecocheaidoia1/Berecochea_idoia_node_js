
const prompt = require('prompt-sync')();

var num = prompt("ingrese un numero: ");

function breakStatement(num) {
    let arr = [];
    let sum = 0;
  
    for (let i = 0; i < 10; i++) {
      num += 2;
      arr.push(num);
      sum += num;
  
      if (sum === (i+1)*num) {
        return "Se interrumpió la ejecución";

        
      }
    }
  
    console.log(arr);
}
breakStatement(num);



