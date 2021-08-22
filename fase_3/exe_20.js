/* Escrever um programa que solicita um número, calcula o dobro do valor, e devolve a mensagem: "O dobro de x foi y.", substituindo x e y pelos valores.
Dica: Utilize uma variável nova para armazenar o resultado.
 */

const prompt = require("prompt-sync")();

var numero = 0;
var dobro = 0;
numero = prompt('Qual numero deseja saber o dobro? ');
dobro = numero * 2;
console.log("O dobro de " + numero + " foi " + dobro +".")
