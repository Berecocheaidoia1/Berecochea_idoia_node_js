//Crear la función “sumArray” que tome dos parámetros, un arreglo de números ordenados y un número.
//La función devolverá true, si cualquier combinación de dos números dentro del arreglo suman el número del segundo parámetro. Sino, devolverá false.

const prompt = require('prompt-sync')();


var num = prompt("ingrese un valor: ")
var arr = [2, 5, 7, 10, 11, 15, 20]

function sumArray(arr, num) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    const sum = arr[leftIndex] + arr[rightIndex];

    if (sum === num) {
      return true;
    } else if (sum < num) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return false;
}
sumArray(arr,num)
