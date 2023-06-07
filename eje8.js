//Crear un programa que determine si un año dado es bisiesto. 
//En caso de que lo sea retornar por consola “El año ingresado es bisiesto”, 
//y en caso de no serlo retornar “El año ingresado no es bisiesto”.

var año = parseInt(prompt("ingrese un año: "));

if (((año%4==0)&&(año%100!=0))||año%400==0){
        console.log("el año es bisiesto");

}    else {
        console.log("el año no es bisiesto")

    } 
//