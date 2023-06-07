var arr= [1, 2, 3, 4, 5, 6];
var divisor = 2
function divisibles(arr, divisor) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % divisor === 0) {
        result.push(arr[i]);

      }
    }
    console.log(result) ;
}
divisibles(arr,divisor)
//