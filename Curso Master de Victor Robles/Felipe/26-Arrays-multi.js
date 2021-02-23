'use strict'

var categorias = ['accion', 'terror', 'comedia'];
var peliculas = ['La verdad duele', 'la vida es bella', 'El truena viejitas 2'];

peliculas.reverse();
var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);
/* var elemento = prompt("Introduce tu pelicula:");

var elemento = "";
do{
    peliculas.push(elemento);
    elemento = prompt("Introduza otra pelicula: ");
}while(elemento != "ACABAR") */


var peliculasString = peliculas.join();


console.log(peliculasString);

var cadena = "texto1, texto2, texto3";

var cadenaArray = cadena.split(", ");

console.log(cadenaArray);