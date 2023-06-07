
const prompt = require('prompt-sync')();

let ary = [];//inicias un nuevo array (arreglo)

    let num = prompt('Escribe un numero: ');
        while(!num || isNaN(num)){
            num = prompt('Escribe un numero');
        }

    for(let i = 1; i <= num; i++){
        ary.push(i);
    }

    console.log(ary);

    //