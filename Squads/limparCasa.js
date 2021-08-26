/* # Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Rafael Alves.
● Squad de Origem (Requisito): “Dsd” dragon slayer developers (Squad 5)
● Data: 23/08/2021
## Descrição:
Limpar a casa. Crie um programa que mostre se o cômodo da casa que você escolher está limpo ou se ele tem que ser limpo. Você deve ter a entrada com os cômodos da casa, e criar um sistema que indique se o cômodo esta limpo ou não, exibindo uma mensagem no console para cada cômodo que for da sua escolha.*/

const prompt = require('prompt-sync')();

console.log(" _____Bem-Vindo a empresa Limpe Fácil!_____ \n");

console.log("Qual o cômodo deseja verificar?\n");
console.log ("(0)quarto\n" + "(1)banheiro\n" + "(2)cozinha\n" + "(3)sala\n" + "(4)varanda\n");


var resposta = prompt(" ");
var num = parseInt(resposta);
var comodos = ['quarto', ' banheiro ', 'cozinha', 'sala', 'varanda'];
var comodoDefinido = comodos[num - 1];

console.log(comodoDefinido + ": está limpo?");
console.log("(1) Sim");
console.log("(2) Não");
console.log("(3) Sair");

var limpo = prompt(" ");
var numLimpo = parseInt(limpo);

if (numLimpo == 1)
{
    console.log("OK!! A equipe Limpe Fácil agradece a preferência!");
} 
else if(numLimpo == 2)
{
    console.log("Entre em contato para agendar sua limpeza!");
} 
else 
{
    console.log("Volte Sempre!");
}
