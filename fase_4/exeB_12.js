/*Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.
== Maioral ==
  Player 1: 7
  Player 2: 8
: Resultados :
  Player 1 venceu? False
  Player 2 venceu? True
  Houve empate? False */

  const prompt = require("prompt-sync")();

  console.log("== Maioral ==");
  var player_1 = 0;
  var player_2 = 0;
  
  player_1 = prompt("Player 1:  ");
  player_2 = prompt("Player 2:  ");

  console.clear();
  
  var vencedor_um = player_1 > player_2;
  var vencedor_dois = player_2 > player_1;
  var empate = player_1 == player_2;
  
  console.log("__Resultados__");
  console.log("\nPlayer 1 venceu?  " + vencedor_um);
  console.log("\nPlayer 2 venceu?  " + vencedor_dois);
  console.log("\nHouve empate?  " + empate);
  