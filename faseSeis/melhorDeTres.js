/*O locutor da rádio 90 FM irá fazer uma pergunta ao vivo, cuja resposta ele já falou ao longo da programação. Três ouvintes terão a chance de ganhar uma caneca personalizada, acertando a resposta. E cada ouvinte terá duas chances de responder.*/


const prompt = require("prompt-sync")();

const respostaOficial = "digitacao";

for (i = 0; i < 3; i++);{
    console.log("Alô ouvinte" + (i + 1));
  var chances = 2;


do {

    var resposta = prompt("Quala sua resposta da pergunta ao vivo? ");
    var acertou = resposta ==respostaOficial;

    if(acertou){
        console.log("Alô ouvinte " + (i + 1) + " Você ganhou um par de ingrssos!");
               }
    else{
        chances--;
        console.log("Você errou!" + chances);
        }
    }

    while (!acertou && (chances >0));
}



