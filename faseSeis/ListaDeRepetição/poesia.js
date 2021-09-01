/*No programa “Poesia” um trecho de uma composição conhecida é apresentado na tela. Após imprimir, o programa pergunta se o leitor quer apreciar novamente os versos.*/


const prompt = require("prompt-sync")();

console.log(" Leia esta poesia: ") + poesia;
var poesia = ' Nada como um dia após o outro dia. \n' ;
var lerDeNovo = "S"

do{
    console.log (poesia);
    lerDeNovo = prompt("Deseja ler apreciar esta poesia novamente? S | N ");
} while(lerDeNovo == "S")

