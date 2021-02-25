'use strict'

function cambiaColor(color){
    caja.style.background = color;
}
//COSEGUIR ELEMENTOS CON ID

var caja = document.getElementById("micaja");

caja.innerHTML = "Dailan baldes a";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
console.log(caja);

//COSEGUIR ELEMENTOS POR ETIQUETA

var todosLosDivs = document.getElementsByTagName('div');

var seccion =  document.querySelector("#miseccion");
var hr = document.createElement("hr")

/* todosLosDivs.forEach((valor, indice) =>{ */

for(let valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        let parrafo = document.createElement("p");
        let texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
  
}
seccion.append(hr);

var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";
var div;
for(div in divsRojos){
    if(divsRojos[div].className == "rojo"){
        divsRojos[div].style.background = "red";
    }
}

//QUERY SELECTOR

/* var id = document.querySelector('#encabezado');
console.log(id); */

var claseRojo = document.querySelectorAll("div.rojo");
console.log(claseRojo);

/* var etiqueta = document.querySelector("div");
console.log(etiqueta); */

claseRojo.forEach((elemento) =>{
    console.log(elemento);
});