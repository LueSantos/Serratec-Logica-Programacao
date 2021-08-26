/* # Serratec
 * Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: Rock n' Beer
 * Autor (Descrição): André Ponte
 * Título: Teste de COVID retorno a Escola.
 * Arquivo: 
 * Elaboração do Requisito: 22/08/2021


## Descrição: 
No teste de Covid, coloque um questionário com os 5 sintomas mais comuns da covid, retornando se o aluno fica em casa, procure um posto se saude ou liberado para ir a escola

## Dicas:
• Abuse das funções: prompt, if, e operadores lógicos.*/

const prompt = require("prompt-sync")();

var testeCovid = true;

console.log("Teste de Covid 19 para retorno às aulas.\n");
console.log('Digite “Sim” ou “Nao” para cada um dos sintomas abaixo listados\n');

console.log("Tosse seca e persistente? \n")
var tosse = prompt("");
tosse = tosse.toUpperCase();

console.log("Febre acima de 38º C?\n")
var febre = prompt("");
febre = febre.toUpperCase();


console.log("Cansaço excessivo? \n")
var cansaco = prompt("");
cansaco = cansaco.toUpperCase();


console.log("Dor muscular generalizada? \n")
var dorCorpo = prompt("");
dorCorpo = dorCorpo.toUpperCase();

console.log("Dor de cabeça? \n")
var dorCabeca = prompt("");
dorCabeca = dorCabeca.toUpperCase();

testeCovid = tosse == "NAO" &&  febre == "NAO" &&  cansaco == "NAO" && dorCabeca == "NAO" && dorCorpo == "NAO";

if(testeCovid){
    console.log("Retorno autorizado\n")
}
else{
    console.log("Retorno não autorizado! Procure o atendimento médico mais próximo!\n")
}