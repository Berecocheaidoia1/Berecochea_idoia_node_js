const prompt = require('prompt-sync')();

var inicio = parseInt(prompt("ingrese un numero: "));
var fin= parseInt(prompt("ingrese un numero: "));
var sumador= parseInt(prompt("ingrese un numero: "));

function rango(inicio, fin, sumador) {
    const resultado = [];
    for (let i = inicio; i <= fin; i += sumador) {
      resultado.push(i);
    }
    console.log(resultado) ;
}
rango(inicio,fin,sumador);
//