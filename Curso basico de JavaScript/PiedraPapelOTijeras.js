var piedra = 1;
var papel = 2;
var tijera = 3;
var player = Math.floor(Math.random() * 3) + 1;
var cpu = Math.floor(Math.random() * 3) + 1;

    if (player === 1 && cpu === 3 ||
        player === 2 && cpu === 1 ||
        player === 3 && cpu === 2){
            console.log("Ganastee!!")
    }else if(player === cpu){
        console.log("Es un empatee!!")   
    }else{
        console.log("La cpu ganaa!!")
    }
