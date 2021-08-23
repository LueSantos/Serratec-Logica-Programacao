/* Na gincana de arrecadação de alimentos, as equipes A e B têm uma semana para formar uma pilha com as doações. Sendo que a empresa irá dobrar a quantidade de quilos de feijão arrecadados. Ganha um ponto extra a equipe cuja quantidade de pacotes permitir a montagem de kits com 3 alimentos. O programa “Gincana” irá apurar as quantidades recolhidas e exibir o nome da equipe vencedora.
: Equipe A
Pacotes: 37
Feijão: 7
: Equipe B
Pacotes: 21
Feijão: 15
[Apuração]
Equipe A: 51
Equipe B: 52
E a vencedora é: Equipe B!

 */

var ler = require("prompt-sync")();

console.log("Equipe A: ")
var pacotes_A = ler("Pacotes: ");
var feijao_B = ler("Feijão: ");

console.log("\nEquipe B: ");
var pctsB = ler("Pacotes: ");
var feijaoB = ler("Feijão: ");

console.log("\n[Apuração]");
var totalA = (feijao_B * 2) + parseInt(pacotes_A);

if((pacotes_A % 3) == 0){
    totalA = (feijao_B * 2) + parseInt(pacotes_A) + 1;
}
console.log("\nEquipe A: " + totalA);

var totalB = (feijaoB * 2) + parseInt(pctsB);

if((pctsB % 3) == 0){
    totalB = (feijao_B * 2) + parseInt(pacotes_A) + 1;
}

console.log("Equipe B: " + totalB);

if(totalA > totalB){
    console.log("E a vencedora é: Equipe A!");
}else{
    console.log("E a vencedora é: Equipe B!\n");
}

