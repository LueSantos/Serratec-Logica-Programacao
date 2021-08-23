/* O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.
 */

var ler = require("prompt-sync")();

var a = ler("Digite o valor do primeiro ângulo: ");
var b = ler("Digite o valor do segundo ângulo: ");
var c = ler("Digite o valor do terceiro ângulo: ");

/*Para formar triângulo é necessário que a soma de seus ângulos sejam de 180°*/
var teste1 = (parseInt(a)+ parseInt(b)+ parseInt(c)) == 180;

console.log("O triangulo existe? " + teste1);

