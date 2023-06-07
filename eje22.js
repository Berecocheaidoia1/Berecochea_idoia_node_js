//Crear una función llamada “moveZeros” que reciba un arreglo como parámetro y devuelva otro con los números “0” ordenados al final.


var arr = ([1,2,0,1,0,1,0,3,0,1]) 
function moveZeros(arr) { // Crear un arreglo vacío para almacenar los números no cero
    const newArr = [];
    
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
      
      if (arr[i] === 0) {
        count++;
      
      } else {
        newArr.push(arr[i]);
      }
    }
    for (let i = 0; i < count; i++) {
      newArr.push(0);
    }
   
    console.log(newArr) ;
}

moveZeros(arr)
//