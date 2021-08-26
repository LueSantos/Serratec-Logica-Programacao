/* Boa tarde!
Seguindo a proposta de avaliação em Squad,:
Squad DevAneios 
Componentes: 
Beatriz Neves Nolasco
Guilherme Ferreira Gusman
Higor Henrique Dos Santos Nascim
Luciana Gasparini Moreira Wendling
Rodrigo Calmon Nogueira Da G
Viviane Dantas Soares


Enunciado escolhido para rodízio: 


Calculadora de Páginas de leitura vs. Deadline (prazo final)
O algoritmo proposto deve funcionar da seguinte maneira:
Deve cumprimentar de forma simples o usuário, sem a necessidade de saber quem está sendo saudado.
Perguntar ao usuário que livro ele está lendo, quantas páginas esse livro tem, e em quantos dias ele precisa ler o livro. Com as condições que a quantidade de páginas e dias devem ser 1 ou maior.
Entregar ao usuário o resultado da conta de (páginas / dias) de forma elegante, sem casas decimais e arredondando para cima (ex: 2.4 = 3).
Recomendar ao usuário uma nova leitura para ser realizada após o termino da que ele está iniciando, em caso de:
o livro ter menos de 100 páginas ou igual: O pode da Manhã e O Alienista.
o livro ter entre 101 e 499 páginas: O Homem Invisivel e Eu, Robo.
o livro ter mais de 500 páginas ou igual: Moby Dick e Duna.
Com as condições que apenas uma recomendação deve ser feita, e o livro respondido pelo usuário não pode ser o mesmo da recomendação.*/

var prompt = require("prompt-sync")();

console.log(" Seja bem-vindo ao Leitura Dinâminca.\n");
var ler = prompt("Está lendo algum livro no momento ? Qual ? \n");
var pageLivro = prompt("Quantas páginas tem o livro ? \n");
var diasLeitura = prompt("Pretende finalizar a leitura desse livro em quantos dias ?\n ");

var tempoLeitura = Math.round(pageLivro / diasLeitura);

console.log( "Você precisa ler " + tempoLeitura + " páginas por dia para atingir o tempo de leitura desejado.");

var recomendarlivro1 =
  pageLivro <= 100 && ler != "O pode da Manhã" && ler != "MindSet";
var recomendarlivro2 = pageLivro > 100 && pageLivro <= 499 &&
  ler != "Inteligência Emocional" &&
  ler != "Focus";
var recomendarlivro3 = pageLivro >= 500 && ler != " MindSet" && ler != "Focus";

if (recomendarlivro1) {
  console.log( "Indicamos estes livros de acordo com o seu perfil: "+ " O poder da Manhã e MindSet, talvez você goste!\n");
}

if (recomendarlivro2) {
  console.log(
    "Indicamos estes livros de acordo com o seu perfil: "+ " Inteligência Emocional e Focus, talvez você goste!\n");
}

if (recomendarlivro3) {
  console.log("Indicamos estes livros de acordo com o seu perfil: " + " O Monge e o Executivo e Agilidade Emocional talvez você goste!\n");
}
