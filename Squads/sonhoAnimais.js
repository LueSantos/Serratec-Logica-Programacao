/*# Serratec - Lógica de Programação
Lógica de Programação - Prof. Moises do Amaral Baddini
Atividade: Elicitação de Requisitos
Squad de Origem (Requisito): Rock n' Beer (Squad 4)
Autor (Descrição): Gustavo J. Barros
Arquivo: sonhoAnimais.js
Elaboração do Requisito: 22/08/2021
## Descrição:
Sempre tem aquela pessoa que sonha com algum animal e alguém fala para você jogar.
Como a IA costuma ter a cabeça nas nuvens, ela pode sonhar também com vários animais
e diversas vezes. Será que o Animal que você sonhou é o mesmo da nossa IA?


## Dicas:
Crie uma função para gerar os números aleatórios.
Diga sempre qual é o animal sorteado
Diga se ele acertou ou não
Dê uma nova chance até ele acertar.*/

var prompt = require("prompt-sync")();
var player = prompt("Qual o animal dos seu sonho ?");

function genial_X(max) {
  return Math.floor(Math.random() * max);
}

var animais = [];
animais[0] = "'Águia'";
animais[1] = "Camelo";
animais[2] = "Touro";
animais[3] = "Peixe";
animais[4] = "Rato";
animais[5] = "Barata";
animais[6] = "Tubarão";
animais[7] = "cobra";
animais[8] = "Coruja";
animais[9] = "Pombo";

do {
  var olha_bicho = IA_SiSi == player;
  var betaMix = genial_X(9);
  var IA_SiSi = animais[betaMix];
  console.log("O sonho de SiSi foi com " + IA_SiSi + "Tente outra vez");

  player = prompt("Qual o animal dos seus sonhos\n ?");

  if (olha_bicho) {
    console.log(
      "Parabéns hoje é seu dia de sorte!\n" +
        "A IA_SiSi sonhou com " +
        IA_SiSi +
        "A mensagem de SiSi pra você é: Se correr o bicho pega e se ficar o bicho come! Pense nisso!!! "
    );
    break;
  } else {
    console.log(" Você Errou! Acredite mais nos seus sonhos !!");
  }
} while (!olha_bicho);
