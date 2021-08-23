/* É considerado “Emancipado” qualquer indivíduo a partir de 21 anos, ou a pessoa do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão com base em sua idade no ano atual.
Sexo: Feminino
Ano de nascimento: 1999
Cidadão emancipado? True

 */
const prompt = require("prompt-sync")();

var ano_atual = 2021;
var genero = " ";
var nascimento = 0;
var emancipado = true;

var genero = prompt("Gênero: masculino ou feminino?:  ");
var nascimento = prompt("Qual é o ano de nascimento: ");

nascimento = ano_atual - nascimento;

var emancipado = (genero == "masculino") && (nascimento < 2000) || (genero == "feminino") && (nascimento < 2003);

console.log("Emancipado: " + emancipado);
