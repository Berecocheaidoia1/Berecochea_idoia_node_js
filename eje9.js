
//Crear un programa que solicite una edad y dependiendo del valor ingresado retorne por consola lo siguiente:
// “Es un niño” si la edad es menor a 13./// “Es un adolescente” si la edad ingresada está entre 13 y 17. {}  >   < &&
//“Es un adulto” si la edad está entre 18 y 110. “No es una edad válida” en el caso de que no se cumpla ninguna de las condiciones anteriores.


var edad = parseInt(prompt("ingrese una edad: "));

if (edad<13){
    console.log("Es un niño");

}   else if (edad>=13 && edad<=17 ) {
    console.log("Es un Adolescente");

}   else if (edad>=18 &&  edad<=110 ) {
    console.log("Es un Adulto")
    
}   else {
    console.log("NO es una edad valida")

}
