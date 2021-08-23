/* O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.
*/


const prompt = require("prompt-sync")();
const limite = 8;
var qtde = prompt("Registre a quantidade de clientes que na loja: ");

var liberada = (qtde < limite);
var proximo = (qtde == 7);

if (liberada){
     console.log("Entrada liberada. Seja bem-vindo! ")
    if (proximo) {
        console.log('Acompanhante não está liberado.');
    }
}
else {
console.log("Aguarde sua vez! A loja está cheia.");
}