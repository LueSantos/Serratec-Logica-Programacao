/*O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas, escreve na tela o resultado de cada operação relacional com os números.*/

var numA = 33;
var numB = 37;

var A_igual_B = numA == numB;
var A_diferente_B = numA != numB;
var A_maior_B = numA >  numB ; 
var A_maior_igual_B = numA >= numB;
var A_menor_B = numA < numB;
var A_menor_igual_B = numA <= numB;

console.log("\nA é igual a B?:  " + A_igual_B + " \nA é diferente de B?: " + A_diferente_B + " \nA é maior que B?: " + A_maior_B + " \nA é maior ou igual a B?: " + A_maior_igual_B + "\nA é menor que B?: " + A_menor_B + " \nA é menor ou igual a B?: " + A_menor_igual_B);

