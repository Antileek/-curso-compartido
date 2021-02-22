'use strict'

//FUNCIONES
function PorPantalla(numero1, numero2){
    document.write("suma: " + (numero1 + numero2) + "<br>");
    document.write("resta: " + (numero1 - numero2)+ "<br>");
    document.write("multiplicaion: " + (numero1 * numero2)+ "<br>");
    document.write("division: " + (numero1 / numero2)+ "<br>");
}

function PorConsola(numero1, numero2){
    console.log("suma: " + (numero1 + numero2));
    console.log("resta: " + (numero1 - numero2));
    console.log("multiplicacion: " + (numero1 * numero2));
    console.log("division: " + (numero1 / numero2));
}

function calculadora(numero1, numero2, mostrar = false){

   if(mostrar === false){
    PorPantalla(4,7);
   }
   else{
   PorConsola(5,7);

   return true;
   }
}
calculadora(4,3);
calculadora(5,7,true);

/* for(var i = 1; i <=10; i++){
console.log(i);
calculadora(i,8);
} */