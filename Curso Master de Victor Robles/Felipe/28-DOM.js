'use strict'

function cambiaColor(color){
    caja.style.background = color;
}
//COSEGUIR ELEMENTOS CON ID

var caja = document.getElementById("micaja");

caja.innerHTML = "Dailan baldes";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
console.log(caja);

//COSEGUIR ELEMENTOS POR ETIQUETE

var todosLosDivs = document.getElementsByTagName('div');

var seccion =  document.querySelector("#miseccion");
var hr = document.createElement("hr")

/* todosLosDivs.forEach((valor, indice) =>{ */
var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'String'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
       
    }
  
}
seccion.append(hr);