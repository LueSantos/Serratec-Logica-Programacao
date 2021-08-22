/*O programa “Quadrado” terá um código adaptado do item anterior, para calcular o quadrado do número digitado.*/

const prompt = require("prompt-sync")();

var num = 0;
var quadrado = 0;
num = prompt('Digite um numero para saber o quadrado? ');
quadrado = num * num;
console.log("O quadrado de " + num + " foi " + quadrado +".")
