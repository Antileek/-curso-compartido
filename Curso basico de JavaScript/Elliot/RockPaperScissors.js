
var elecciones = ["tijeras","piedra","papel"];

var player = elecciones[Math.floor(Math.random()* 3)];
var cpu = elecciones[Math.floor(Math.random()* 3)];

 function RockPaperScissors(player,cpu) {

    if (cpu == player) {
         console.log("empate");
    } else if ((player == "tijeras" && cpu == "papel") ||
        (player == "piedra" && cpu == "tijeras") ||
        (player == "papel" && cpu == "piedra")) 
        {
             console.log("Gana el jugador");
        }
        else
        {
             console.log("Gana el Cpu");
        }
}

RockPaperScissors(player,cpu);
