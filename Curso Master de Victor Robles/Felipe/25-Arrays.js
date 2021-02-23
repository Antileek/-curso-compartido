'use strict'

//ARRAYS, MATRICES O ARREGLOS

var nombres = ["Felipe Salas", "Elliot comepico", "Dailan valdes", 52, true];
var lenguajes = new Array("PHP", "JS","GO", "JAVA", "C#");

/* var elemento = prompt("Que elemento de la array quieres?", 0);
if(elemento >= nombres.length){
    alert("Introduce el numero correcto menor que: " + nombres.length);

}else{
    alert("El elemento seleccionado es: " + nombres[elemento]);
}
 */

document.write("<h1>Lenguajes de programacion del 2018</h1>");
/* for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
}
 */

/*  lenguajes.forEach((elemento, indice) => {
    document.write("<li>" + elemento + "</li>");
 });
 */
 for(let lenguaje in lenguajes){
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
 }

/*  for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>" + lenguajes[i] + "</li>");
 } */

 //BUSQUEDAS
 var precios = [10, 20, 50, 80, 12];

 var busqueda = precios.some(precio => precio >= 80);
/* var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP"); */

 console.log(busqueda);