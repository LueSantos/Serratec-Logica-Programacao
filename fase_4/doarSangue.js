/* Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.
== Banco de Sangue ==
[Digite “Sim” ou “Não” nas restrições a seguir]
Idade abaixo de 16 ou acima de 69 anos: Não
Pesa menos de 50kg: Não
Portador de Hepatite: Não
Já teve Malária: Não
Fez doação recente: Sim

[Resultado da triagem]
Pode doar sangue? False

*/

const prompt = require("prompt-sync")();

var triagem = true;

console.log("== Banco de Sangue ==");
console.log("[Digite “Sim” ou “Não” nas restrições a seguir]");
var idade = prompt("Idade abaixo de 16 ou acima de 69 anos?:  ");
var peso = prompt("Pesa menos de 50kg?: ");
var hepatite = prompt("É portador de Hepatite?: ");
var malaria = prompt("Já teve Malária?: ");
var doacao = prompt("Fez doação recente?: ");

triagem = idade == "Não" &&  peso == "Não" &&  hepatite == "Não" && malaria == "Não" && doacao == "Não";

console.log("[Resultado da triagem]");
console.log("Pode doar sangue? " + triagem);
