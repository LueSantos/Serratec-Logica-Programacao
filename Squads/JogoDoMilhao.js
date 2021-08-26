/*# Serratec
 * Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: Rock n' Beer
 * Autor (Descrição): Marcos Vinícius
 * Título: Jogo do Milhão
 * Arquivo: 
 * Elaboração do Requisito: 21/08/2021


## Descrição: 
No jogo do milhão você deve criar 5 perguntas valendo respectivamente mil, 10 mil, 100 mil, 500 mil e 1 milhão. Cada pergunta deve ter 4 alternativas sendo apenas 1 verdadeira, se você acertar você passa para próxima fase, se errar perde a chance de continuar.


## Dicas:
• Abuse das funções: prompt, switch e if. 
• Esse jogo não precisa de nenhum conhecimento além do que aprendemos.*/

const prompt = require("prompt-sync")();

const pergunta1 = [
  `A pergunta que vale R$ 1.000,00 é:
Qual dessas empresas produz processadores para computador?
1 - Coca-cola
2 - Palmolive
3 - Intel
4 - Bic
`,
  3,
];

const pergunta2 = [
  `A pergunta que vale R$ 10.000,00 é:
Em qual país foi nasceu o escritor Paulo Coelho?
1 - Argentina 
2 - Brasil
3 - Portugal
4 - Chile
`,
  2,
];

const pergunta3 = [
  `A pergunta que vale R$ 100.000,00 é:
Quem é o maior artilhero da história do Campeonato Brasileiro com 190 gols?
1 - Roberto Dinamite
2 - Pelé
3 - Garrinha
4 - Renato Gaúcho
`,
  1,
];

const pergunta4 = [
  `A pergunta que vale R$ 500.000,00 é:
Quem foi o Ator que interpretou o personagem V no filme "V de Vingança"?
1 - Lambert Wilson
2 - David Tennant
3 - Toby Kebbell
4 - Hugo Weacing
`,
  4,
];

const pergunta5 = [
  `A pergunta que vale R$ 1.000.000,00 é:
A capitulação da Alemanha sob custódia do general dos Estados Unidos Walter Bell-Smith foi considerado como a data do fim da Segunda Guerra Mundial. Qual foi a data?
1 - 3 de março de 1945
2 - 8 de maio de 1945
3 - 14 de abril de 1945
4 - 22 de fevereiro de 1945
`,
  2,
];
var continuar = true;
do {
  console.log(pergunta1[0])
  var resposta1 = prompt('');
  resposta1 = parseInt(resposta1);
  if (resposta1 == pergunta1[1]) {
    console.clear("");
  } else {
    console.log("Que pena, você errou.");
    continuar = ! continuar;
    break;
  }
  console.log("Parabéns, você acertou! Vamos para a proxima");
  console.log(pergunta2[0]);
  var resposta2 = prompt("");
  resposta2 = parseInt(resposta2);
  if (resposta2 == pergunta2[1]) {
    console.clear("");
  } else {
    console.log("Que pena, você errou.");
    continuar = ! continuar;
    break;
  }
  console.log("Parabéns, você acertou! Vamos para a proxima");
  console.log(pergunta3[0]);
  var resposta3 = prompt('');
  resposta3 = parseInt(resposta3);
  if (resposta3 == pergunta3[1]) {
    console.clear("");
  } else {
    console.log("Que pena, você errou.");
    continuar = ! continuar;
    break;
  }
  console.log("Parabéns, você acertou! Vamos para a proxima");
  console.log(pergunta4[0]);
  var resposta4 = prompt('');
  resposta4 = parseInt(resposta4);
  if (resposta4 == pergunta4[1]) {
    console.clear("");
  } else {
    console.log("Que pena, você errou.");
    continuar = ! continuar;
    break;
  }
  console.log("Parabéns, você acertou! Vamos para a proxima");
  console.log(pergunta5[0]);
  var resposta5 = prompt("");
  resposta5 = parseInt(resposta5);
  if (resposta5 == pergunta5[1]) {
    console.log("Parabéns, você acertou! Você ganhou 1.000.000,00!");
    continuar = ! continuar;
  } else {
    console.log("Que pena, você errou. Logo na última!");
    continuar = ! continuar;
    break;
  }
} while (continuar);