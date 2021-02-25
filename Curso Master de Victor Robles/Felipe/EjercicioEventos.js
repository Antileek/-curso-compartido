'use strict'

window.addEventListener('load', () =>{

    var boton = document.querySelectorAll("#enviar");

    boton.addEventListener('submit', () =>{
        console.log("Jla esta madre");

    function escribe(){
        var escribir = document.querySelector("#caja");
        var nombre = "<h2>" + document.getElementById("nombre").value + "</h2>";
        var apellido = "<h2>" + document.getElementById("apellido").value + "</h2>";
        var edad = "<h2>" + document.getElementById("edad").value + "</h2>";

        escribir.innerHTML = nombre + apellido + edad;
    };

    
    });














});