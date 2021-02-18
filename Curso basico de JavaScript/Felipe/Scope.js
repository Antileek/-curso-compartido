var nombre = "Felipe"; //variable global

function fun(){
    var apellido = "Salas"; //variable local
    console.log(nombre + " " + apellido);
}

fun();

nombre //exite porque es una varible global

apellido //no existe porque solo esta declarada dentro de la funcion fun