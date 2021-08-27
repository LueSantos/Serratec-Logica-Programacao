
  const prompt = require("prompt-sync")();

var aluno = [];
var presenca = [];

aluno [0] ='Andre',
presenca [0] = true;

aluno [1] ='Andre';
presenca [1] = true;

aluno [2] ='Adrian';
presenca [2] = true;

aluno [3] = 'Viviane';
presenca [3] = true;

aluno [4] = 'Victor';
presenca [4] = true;

aluno [5] ='Vanderson';
presenca [5] = true;

aluno [6] ='Samuel';
presenca [6] = true;

aluno [7] ='Rodrigo';
presenca [7] = true;

aluno [8] ='Rodrigo';
presenca [8] = true;

aluno [9] ='Raquel';
presenca [9] = true;

aluno [10] ='Rafael';
presenca [10] = true;

aluno [11] ='Pedro';
presenca [11] = true;

aluno [12] ='Pedro';
presenca [12] = true;

aluno [13] ='Núria';
presenca [13] = true;

aluno [14] ='Nathan';
presenca [14] = true;

aluno [15] ='Matheus';
presenca [15] = false;

aluno [16] ='Marcos';
presenca [16] = true;

aluno [17] ='Marcos';
presenca [17] = false;

aluno [18] ='Marcella';
presenca [18] = true;

aluno [19] ='Luciana';
presenca [19] = true;

aluno [20] ='Luciana';
presenca [20] = true;

aluno [21] ='Luana';
presenca [21] = true;

aluno [22] ='Leandro';
presenca [22] = true;

aluno [23] ='Karina';
presenca [23] = true;

aluno [24] ='Higor';
presenca [24] = true;

aluno [25] ='Gustavo';
presenca [25] = true;

aluno [26] ='Guilherme';
presenca [26] = true;

aluno [27] ='Gilnei';
presenca [27] = true;

aluno [28] ='Eduardo';
presenca [28] = true;

aluno [29] ='Diego';
presenca [29] = true;

aluno [30] ='Daniel';
presenca [30] = true;

aluno [31] ='Carolina';
presenca [31] = true;

aluno [32] ='Carlos';
presenca [32] = true;

aluno [33] ='Bruno';
presenca [33] = true;

aluno [34] ='Beatriz';
presenca [34] = true;



var qtde = aluno.length;
console.log("A quantidade de alunos: " + qtde);

//posição do aluno "nome"

var nome = "Luciana";
var cadeira = -1;


for (var i = 0; i < qtde; i++){
    
    if(aluno[i] == nome){
        cadeira = i;
        break;
    }
}

if(cadeira == -1){

        console.log("Não encontrei o aluno " + nome + " na listagem");
    }
    else{
        console.log("A aluna " + nome + " que está na cadeira " + cadeira +  ", está presente e pode ser liberada a partir de agora!" );
    }
// total de alunos presentes 

    var total = 0;

for (var i = 0; i < presenca.length; i++){
    var presente = (presenca[1] == true);

  if (presente) {
     total = total + 1;
        }
    }
console.log("O total de presentes é: " + total);

// O nome dos alunos ausentes

/*var nomeAusentes = "";

for (var i = 0; i < presenca.length; i++){
if(presenca[i]){
    total++;
}
else{
    var nomeAusentes = aluno[i];
    console.log("Os alunos ausentes são: " + nomeAusentes);

}
}*/

var ausentes = [];

for (let i = 0; i < aluno.length; i++) {
    const faltou = ! presenca[i];

    if(faltou){
        nome = aluno[i];
        ausentes.push(nome);
    }
}
console.log("Os nomes dos ausentes abaixo: ");
console.log(ausentes);
