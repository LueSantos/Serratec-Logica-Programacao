/* O “cara ou coroa gentil” irá perguntar sua escolha e depois fica jogando a moeda até que ela caia do jeito que você queria! Cada jogada será exibida no console.
 */


const player = require("prompt-sync")();


console.log(`## Bem-Vindo ao jogo Cara e Coroa ** Tudo na Sorte ** \n`);

console.log(` Qual modeda você deseja, cara ou coroa?\n`);

var escolha = parseInt(player(`Digite: 
0 - Cara 
1 - Coroa `));
1
var cont = 0;
do{

    var num = Math.floor(Math.random() * 2);
    console.log(`A moeda sorteada é: ${num}`);
    break;
}

 while (escolha != num);
 console.log(`Você acertou! ${cont}`);

