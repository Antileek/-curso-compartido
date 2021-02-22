'use strict'

//PARAMETROS REST Y SPREAD

function listadoFrutas(fruta1, fruta2, ...RestoFrutas){
    console.log("Fruta 1 :" ,fruta1);
    console.log("Fruta 2 :" ,fruta2);
    console.log(RestoFrutas);
}

listadoFrutas("Naranja","Manzana", "Sandia","Platano","Aguacate","Mandarina");