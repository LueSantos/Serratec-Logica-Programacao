/*A “continha oposta” lê um número e mostra seu valor negativo.*/

const prompt = require("prompt-sync")();

var num = prompt("Digite um numero para saber o valor negativo:  ");

var int_negativo = num * -1;

console.log("O valor negativo é:  " + int_negativo);
