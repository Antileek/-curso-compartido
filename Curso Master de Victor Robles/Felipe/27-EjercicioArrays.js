'use strict'

var numeros = [];
//Pedir numeros
for(var i = 0; i < 6; i++){
    var agregar = numeros.push(parseInt(prompt("Intrudzca un numero: ")));
}
//Array original
console.log("El array ingresado es: " + numeros);
for(let numero in numeros){
    document.write("<li>" + numeros[numero] + "</li>");
}
//Ordenar los numeros
var ordenar = function(a, b){ return a - b};
numeros.sort(ordenar);
console.log("El array ordenado es: " + numeros);

for(let numero in numeros){
    document.write("<li>" + numeros[numero] + "</li>");
}

//Invertir y mostrar array
document.write("<br>La array invertida se veria asi: ");

var invertir = numeros.reverse();
console.log("El array invertido es: " + invertir);

for(let inversion in invertir){
    document.write("<li>" + invertir[inversion] + "</li>");
}

//Mostrar cantidad de elementos de la array
document.write("<h2>Esta array contiene: " + numeros.length + " elementos</h2>");

//Buscar un valor en la array
var buscar = numeros.indexOf(parseInt(prompt("Introduza un el numero a buscar: ")));  

if(buscar > -1){
    alert("El numero que estas buscando si esta en la array!!");
}else{
    alert("El numero que estas buscando no se encuentra en esta array :(");
}