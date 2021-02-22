'use strict'
var num;
var cantidad = 0;
var sum = 0;
var media;
do{
    num = parseInt(prompt("Introduza un numero", 0));
    sum += num;
    cantidad++;

}while(num > 0 || isNaN(num))

media = sum / cantidad;
console.log("La suma total de los numeros introducidos es " + sum);
console.log("La media de la suma es " + media);