
var elecciones = ["tijeras","piedra","papel"];

var player = elecciones[Math.floor(Math.random()* 3)];
var cpu = elecciones[Math.floor(Math.random()* 3)];

 function RockPaperScissors(player,cpu) {

     switch(true)
     {
     case (cpu == player):  
         console.log("empate");
         break;
     case ((player == "tijeras" && cpu == "papel") ||
          (player == "piedra" && cpu == "tijeras") ||
          (player == "papel" && cpu == "piedra")):        
          console.log("Gana el jugador");
          break;
     default:
          console.log("Gana el Cpu");
          break
     }
}

RockPaperScissors(player,cpu);
