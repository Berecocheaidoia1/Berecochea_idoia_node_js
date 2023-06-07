

const prompt = require('prompt-sync')();


var segundos = parseInt(prompt("ingrese valor: "))
function toTime(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    console.log (`${horas} hour(s) and ${minutos} minute(s)`);
}
  
  toTime(segundos)
