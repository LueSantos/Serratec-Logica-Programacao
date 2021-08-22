/*
# Serratec
 * Lógica de Programação - Prof. Moises do Amaral Baddini
 * Atividade: Elicitação de Requisitos
 * Squad: Rock n' Beer
 * Autor (Descrição): Luciana Santos
 * Título: Banho Business
 * Arquivo: 
 * Elaboração do Requisito: 21/08/2021


## Descrição: O administrador da Rodoviaria Interestadual Encontro das Águas decidiu cobrar pelo tempo de banho no seu estabelecimento. Crie um simples sistema de vendas e programe o chuveiro para desligar aos 10 minutos de banho;


## Dicas:
• Venda a promoção ao cliente.
• Use as funções: prompt, switch e if. 
• Informe o tempo do banho para o cliente. 
• E desligue o chuveiro.
-----------------------------------------------------------------------------------------------------------------------
*/

const prompt = require("prompt-sync")();

var escolhaDousuario = 0;
var minutos = 0;


console.log('Seja Bem-Vindo a Rodoviaria Interestadual Econtro das Águas!\n');
console.log('PROMOÇÃO DO DIA: Compre 10 minutos de banho por apenas R$10.\n');

console.log('Deseja comprar o banho?\n');
console.log("Digite: \n(1) Comprar o banho; \n(2) Sair do sistema;");

escolhaDousuario = prompt(" ");

console.clear();

escolhaDousuario = escolhaDousuario * 1; // Estava convertendo o valor em string e não por inteiro. Por isso  

if(escolhaDousuario ==2){
     console.log("TENHA UMA BOA VIAGEM! \n"); 
    } 
else{
     console.log("Pague no caixa e pegue o cartão de acesso disponível.");
     console.log("Aproveite seu banho! Você terá apenas 10 minutos.\n");

     console.clear();

    do{ 
    // O contador é usado para simular um display que informará o tempo restante para o cliente.
        var contador = 0;
        minutos += 3; 

        if(minutos <5){
            contador = 1; 
        }
        else{
            if(minutos >= 5 && minutos < 10){
                contador = 2; 
            }  
            else {contador = 3; }
            }

        switch(contador){

        case 1: 
            console.log("Banho inicializado!\n");
            console.log("Você utilizou " + minutos + " minutos do seu banho!\n");break;
        case 2: 
            console.log("\nAtenção! Restam 4 minutos de banho."); break;
        case 3: 
            console.log("\n Tempo esgostado. Banho finalizado!"); break;
        default: 
            console.log("\n Chuveiro desativado."); break;
        }
    }
while(minutos < 10);
}