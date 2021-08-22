/*Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.*/

const prompt = require("prompt-sync")();

/*var soma = num_L + num_P;
var sub = num_L - num_P;
var multi = num_L * num_P;
var div = num_L / num_P;


var num_L = prompt("Digite um valor para L: ");
var num_P = prompt("Digite um valor para P: ");*/

var num_L = prompt("Digite o preimeiro operando: ");
var num_P = prompt("Digite o segundo operando: ");
var soma = (num_L) +  (num_P); 
var sub = (num_L  - num_P);
var multi = (num_L *  num_P);
var div = (num_L / num_P);

console.log('Esses são os seu valores: \nsomados: ' + soma + '\nsubtraidos: ' + sub + '\nmultiplicados: ' + multi + '\ndivididos: ' + div);

//console.log(" O resutaldo de:   " + soma + "  " + sub + "  " + mult + "  " + div);10

