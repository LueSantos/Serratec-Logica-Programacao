/*# Serratec - Parque Tecnológico Região Serrana
● Lógica de Programação - Prof. Moises do Amaral Baddini
● Atividade: Elicitação de Requisitos
● Autor (Descrição): Marcos Moraes
● Squad de Origem (Requisito): Time NSMN (Squad 6)
● Arquivo: barraquinhaZepa.js
● Data: 22/08/2021
## Descrição:

Zepa tem uma barraquinha na feira, onde vende café e 5 tipos de doces: bala, pirulito,
bombom, paçoca e jujuba. Mas quem é cliente do Zepa sabe que nunca tem café nem
paçoca na sua barraquinha. Quando chega um cliente, ele é sempre gentil e saudoso,
avisando sobre Tudo que ele vende. Quando alguém escolhe um item que ele tem na
barraquinha, ele agradece a pessoa pelo item comprado, e quando alguém pede paçoca ou
café, ele confessa seus vícios e pede desculpa pois devorou o estoque. E se o cliente pedir
algo que ele não vende, o Zepa educadamente pede para que o cliente escolha um produto
válido.

Dica: Use paçoca como "pacoca" e café como "cafe". */

const prompt = require("prompt-sync")();

console.log(" Bem-vindo a Barraquinha do Zépa! \n")
console.log("Vendemos estes deliciosos produtos:\n 1.Pirulito\n 2.Bala\n 3.Jujuba\n 4.Paçoca\n 5.Bombom\n 6.Café\n");
var compra = prompt("O que deseja comprar? Escolha a opção desejada.")

var produtoVendido = true
var produtoEmFalta = true

if (produtoVendido = compra == 1 || compra == 2 || compra == 3 || compra ==  5)
    console.log("Compra efetuada! Agradecemos pela preferência!")
else
    if(produtoEmFalta = compra == compra == 4 || compra == 6)
        console.log("Desculpe, eu devorei o estoque! Sou viaciado em paçoca e café.")
    else
    console.log("Opção inválida! Tente novamente!")

