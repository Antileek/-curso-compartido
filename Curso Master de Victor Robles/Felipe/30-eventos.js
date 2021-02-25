'use strict'

//EVENTOS

//RATON
window.addEventListener('load', () => {

    function cambiarColor(){
        console.log("Me has dado click");

        var bg =  boton.style.background;

        if( bg == "green"){
            boton.style.background= "red";
            
        }else{
            boton.style.background= "green";
        }
        boton.style.padding = "10px";
        boton.style.border = "1px solid black";


        return true;
    }

    var boton = document.querySelector("#boton");

    //EVENTO CLICK
    boton.addEventListener('click', function(){
        cambiarColor();
    });

    //MOUSE OVER
    boton.addEventListener('mouseover', function(){
        boton.style.background = "yellow";
    });

    boton.addEventListener('mouseout', function(){
        boton.style.background = "#ccc";
    });

    //FOCUS
    var input = document.querySelector("#nombre");
    input.addEventListener('focus', function(){
        console.log("Estas dentro de focus");
    });
    //BLUR
    input.addEventListener('blur', function(){
        console.log("[blur] Estas fuera del input");
    });
    //KEYDOWN
    input.addEventListener('keydown', function(event){
        console.log("Pulsando la tecla ", String.fromCharCode(event.keyCode));
    });

    //KEYPRESS
    input.addEventListener('keypress', function(event){
        console.log("[keypress]Tecla presionada ", String.fromCharCode(event.keyCode));
    });
    //KEYUP
    input.addEventListener('keyup', function(event){
        console.log("[keyup]Tecla soltada ", String.fromCharCode(event.keyCode));
    });
});
