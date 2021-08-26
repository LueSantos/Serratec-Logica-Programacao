/*# Serratec
 * Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: Rock n' Beer
 * Autor (Descrição): Matheus R. Andrade
 * Título: Dois Mais Dois
 * Arquivo: 
 * Elaboração do Requisito: 21/08/2021

## Descrição:
O programa "DoisMaisDois" gera números aleatórios até 10 para responder a seguinte questão: "Quanto é a metade de dois mais dois?". Se o programa acertar a resposta, o programador ganha um milhão de reais. Se ele errar, o programador pode tentar novamente.

## Dicas:
• Crie uma função para gerar os números aleatórios.
• Rode o programa até você se tornar o mais novo milionário do país.*/


const prompt = require("prompt-sync")();

var resposta = 2;
var respostaUser = "S";
console.log("Você sabe quanto é a metade de dois mais dois?. Se o programa acertar a resposta, o programador ganha UM MILHÃO de reais!")
do {
    var sorteio = Math.random() * 10 + 1;
    sorteio = Math.floor(sorteio);
    var resultado = resposta == sorteio;
    console.log("O resultado é: " + resposta);
    console.log("O sorteado foi: " + sorteio);
    if(resultado){    
    console.log('Parabéns, você é o mais novo milionário da praça!')
    break;
}
else{
    console.log("Que pena, não foi dessa vez! Deseja tentar a sorte novamente? Digite S para sim ou N para não: ");
    var respostaUser = prompt("")
    respostaUser = respostaUser.toUpperCase();
    }
}
while (respostaUser == "S");

console.log("Obrigado por jogar conosco!");
