/*O sistema “Mais que mil” apresenta o resultado da soma dos 4 primeiros múltiplos de 4 acima de mil, subtraindo dos 4 primeiros números primos a partir de zero.*/

var mais_que_mil = 1004 + 1008 + 1012 + 1016;
var primeiroP = 2 - mais_que_mil;
var segundoP = 3 - mais_que_mil;
var terceiroP = 5 - mais_que_mil;
var quartoP = 7 - mais_que_mil;
console.log(primeiroP + "  " + segundoP + "  " + terceiroP + "  " + quartoP);