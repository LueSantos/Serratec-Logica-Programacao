/*A prefeitura de Teresópolis estabeleceu o “Rodízio de CPF”, onde o dígito final do documento será utilizado para permitir a entrada nas lojas. CPF final “par” somente pode sair nos dias pares, e de igual modo, o dia ímpar é destinado aos documentos ímpares.
Dia (hoje): 16
CPF (após o hífen): 41
Autorizado a entrar na loja? False */

var prompt = require("prompt-sync")();

var dia = prompt("Qual a data de hoje? ");
var cpf = prompt("Quais os dois últimos dígitos do seu CPF?:  ");

console.clear();

var dia_par = (dia % 2 == 0);
var cpf_par = (cpf % 2 == 0);
var verificacao = (dia_par == cpf_par);

if (verificacao){
console.log("\nCliente liberado. Seja bem-vindo!");
}
else{
console.log("\nCliente não autorizado. Respeite o rodízio!"); 
}
