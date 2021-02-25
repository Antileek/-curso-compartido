'use strict'

window.addEventListener('load', () =>{

    //TIMER
    function intervalo(){
        var tiempo = setInterval(() =>{

            console.log("Set interval ejecutado");

            var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize == "50px"){
                encabezado.style.fontSize == "20px";
            }else{
                encabezado.style.fontSize == "50px";
            }

            document.querySelector("h1").style.fontSize = "50px";

        }, 1000); 
        return tiempo;
    };


    var stop = document.querySelector("#stop");

    stop.addEventListener('click', () =>{
        alert("Has parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener('click', () =>{
        alert("Ha iniciado el bucle");
        intervalo();
    });
});