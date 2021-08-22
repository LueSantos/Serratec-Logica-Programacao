/*Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. Depois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.*/

const prompt = require("prompt-sync")();

var total_produtos = prompt("Qual a quantidade de produtos que irá comprar? ");
console.log("Parabéns por comprar "+ total_produtos + " produtos!");
