/*Serratec - Lógica de programação - 2021.2
Professor: Moisés do Amaral Baddini.
Atividade: Elicitação de requisitos.
Squad: Esquadrão TICida.
Componentes: Carolina Tardin, Carlos Alberto Rodrigues, Diego Faria, Gilnei Lima, Leandro Fita, Marcella Alzuguir
Autor da proposta: Leandro Fita
Data: 21/08/2021

Máquina de Refrigerantes.
Uma famosa empresa de refrigerantes precisa de um software para rodar no console das suas novas máquinas pela cidade. O cliente precisa que o console máquina de refrigerante exiba quatro opções de sabores diferentes, ficando a critério do(a) desenvolvedor(a) exibir os preços dos refrigerantes junto com o sabor ou exibir o preço do refrigerante escolhido em uma tela posterior. Caso opte por exibir o valor do produto escolhido em uma tela posterior, será necessário acrescentar uma opção para o usuário voltar para a tela de escolha de sabores após verificar o preço do produto escolhido. Após a tela de escolha, o software deve exibir uma tela para pagamentos apresentando quatro opções de cédulas. Após o cliente escolher a opção de pagamento, o programa deve exibir uma mensagem com o troco a ser devolvido para o cliente. Porém, caso o valor da cédula escolhida seja inferior ao valor do refrigerante, o programa deve exibir uma mensagem de valor inválido e retornar o usuário novamente para a tela de escolha das cédulas até que uma opção de pagamento válida seja escolhida.
Os refrigerantes possuem os seguintes preços:
•    R$ 1,99
•    R$ 3,50
•    R$3,99
•    R$6,00
O cliente deseja opções de pagamentos com as seguintes cédulas:
•    R$ 2,00
•    R$5,00
•    R$10,00
•    R$20,00*/

const prompt = require("prompt-sync")();

var num;
var numCedula;
var preco = [2.0, 3.5, 4.0, 6.0];
var cedula = [2.0, 5.0, 10.0, 20.0];
var Sabores;
var troco;

console.log("Bem-vindo a Royal Refris a sua máquina de refrigerante! O que deseja beber?  ");
console.log("[1] FantaAbacaxi: R$2,00");
console.log("[2] LemonLima: R$3,50");
console.log("[3] Maracujá-Hortelã: R$4,00");
console.log("[4] PeraIce: R$6,00");

console.log("Digite a opção desejada.");
do {
  num = prompt(" ");
  num = parseInt(num);

  if (!(num > 0 && num <= 4))
    console.log("Número inválido. Tente novamente! ");
} while (!(num > 0 && num <= 4));

switch (num) {
  case 1:
      Sabores = "FantaAbacaxi";
      console.log("Opção confirmada é " + Sabores + ". Valor total é: R$2,00");
      break;
  case 2:
      Sabores = "LemonLima";
      console.log("Opção confirmada é " + Sabores + ". Valor total é: R$3,50");
    break;
  case 3:
      Sabores = "Maracujá-Hortelã";
      console.log("Opção confirmada é " + Sabores + ". Valor total é: R$4,00");
    break;
  case 4:
      Sabores = "PeraIce";
      console.log("Opção confirmada é " + Sabores + ". Valor total é: R$6,00");
    break;
}

console.log(" Cédulas aceitas :");
console.log("[1] R$2,00");
console.log("[2] R$5,00");
console.log("[3] R$10,00");
console.log("[4] R$20,00");
console.log("Confirme a opção desejada.");

do {
  numCedula = prompt(": ");
  numCedula = parseInt(numCedula);

  if (!(numCedula > 0 && numCedula <= 4))
    console.log("Número inválido. Digite novamente. ");

  if (preco[num - 1] > cedula[numCedula - 1])
    console.log("Dinheiro insuficiente. Tente novamente.");
} while (
  !(numCedula > 0 && numCedula <= 4) ||
  preco[num - 1] > cedula[numCedula - 1]
);

troco = cedula[numCedula - 1] - preco[num - 1];

console.log("Troco: R$" + troco);
console.log("Agradecemos pela preferência. Volte sempre!");
