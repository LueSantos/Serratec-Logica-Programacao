/* No jogo de cartas “21 digital” o jogador é quem entrega uma carta ao programa, que armazena o valor e solicita a próxima carta. A vitória é do jogador quando a soma das cartas dá exatos vinte e um, ou ganha o carteador quando a soma ultrapassa esse valor.
*/

const prompt = require("prompt-sync")();


console.log("## BEM-VINDO ao jogo 21 ## Cartas das Sorte ## \n" );

var somaCartas = 0; 

while(somaCartas < 21){

    var carta = parseInt(prompt("Digite uma carta:  "));
    somaCartas += carta;
} 


if(somaCartas == 21){

    console.log("** 21 ** Parabéns!! Você ganhou!\n ");
    }
else{
        console.log(` A mesa venceu! ${somaCartas}" `)
    }
