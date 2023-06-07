
const prompt = require('prompt-sync')();

saldo = 50; 
var numeroApostado = prompt("Ingresa un número del 1 al 6 para apostar: "); 
if (numeroApostado === "" || isNaN(numeroApostado)) {
  numeroApostado = 1; 
}
var cantidadApostada = prompt("Ingresa la cantidad que quieres apostar: "); 
if (cantidadApostada === "" || isNaN(cantidadApostada)) {
  cantidadApostada = 20; 
}

while (saldo >= 20 && saldo < 200) {
  const dado = Math.floor(Math.random() * 6) + 1; 
  console.log("Ha salido el número "+(dado)); 
  if (dado == numeroApostado) { 
    const ganancia = cantidadApostada * 2; 
    saldo += ganancia; 
    console.log("Has ganado"+ (ganancia) +"pesos. Tu saldo actual es de " +(saldo) +" pesos.");

  } else { 
    saldo -= cantidadApostada;
    console.log("Has perdido "+(cantidadApostada)+" pesos. Tu saldo actual es de " +(saldo)+ " pesos.");
  }
}

if (saldo >= 200) { 
  console.log("¡Felicidades, has ganado el juego! Tu saldo final es de "+ (saldo)+" pesos.");
} else { 
  console.log("Lo siento, has perdido el juego. Tu saldo final es de "+(saldo)+ " pesos.");
}