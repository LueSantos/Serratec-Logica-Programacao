

const prompt = require("prompt-sync")();

console.log("|||    BEM VINDO AO BANCO VIRTUAL    |||");
var nome = prompt("Qual o seu nome? ");

var carteira = [];

function comprarAcao(){
    console.log("Ações disponíveis: \n 1 - VALE3 \n 2 - PETR4 \n 3 - ITUB4 \n 4 - ABEV3");
    var compra = prompt("Digite o número da ação que você deseja comprar: ");
    switch (compra){
        case "1": 
            carteira[0] = "VALE3";
            console.log("Parabéns, VALE3 adquirida.");
            break;
        case "2": 
            carteira[1] = "PETR4";
            console.log("Parabéns, PETR4 adquirida.");
            break;
        case "3": 
            carteira[2] = "ITUB4";
            console.log("Parabéns, ITUB4 adquirida.");
            break;
        case "4": 
            carteira[3] = "ABEV3";
            console.log("Parabéns, ABEV3 adquirida.");
            break;
    }
    console.log("O que você deseja fazer? \n 1 - Comprar \n 2 - Sair");
    var escolha = prompt("=> ");
    if (escolha == 1){
        comprarAcao();
}}
function verCarteira(){
    console.log("Você tem as seguintes ações: " + carteira);
    console.log("O que você deseja fazer? \n 1 - Comprar \n 2 - Sair");
    var escolha = prompt("=> ");
    if (escolha == 1){
        comprarAcao();
    }
    else {
    }
}

console.log( nome + " esse é seu primeiro acesso.\n O que você deseja fazer? \n 1 - Comprar \n 2 - Sair");
var primeiro = prompt("=> ");
if (primeiro == 1) {
    console.clear();
    comprarAcao();
    console.log("O que você deseja fazer? \n 1 - Comprar \n 2 - Ver carteira \n 3 - Sair");
    var escolha = prompt("=> ");
        switch(escolha) {
            case "1":
                comprarAcao();
                break;
            case "2":
                verCarteira();
        }
}
else {
    console.log("Até a proxima, " + nome + "!");
}