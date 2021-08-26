/* # Serratec - Parque Tecnológico Região Serrana 
● Lógica de Programação - Prof. Moises do Amaral Baddini 
● Atividade: Elicitação de Requisitos 
● Autor (Descrição): Daniel Cesar 
● Squad de Origem (Requisito): GPS - Group of Programming Students (Squad 1) ● Arquivo: signo.js 
● Data: 22/08/2021 

## Descrição: 
Solicite o nome e a data de nascimento do usuário. Com essas informações, será gerado o signo e uma descrição genérica e aleatória de sua personalidade. 

Meses e Signos:
  Jan 1   Capricórnio: de 22 de dezembro a 20 de janeiro;
  Fev 2   Aquário: de 21 de janeiro a 18 de fevereiro;
  Mar 3   Peixes: de 19 de fevereiro a 20 de março;
  Abr 4   Áries: de 21 de março a 20 de abril;
  May 5   Touro: de 21 de abril a 20 de maio;
  Jun 6   Gêmeos: de 21 de maio a 20 de junho;
  Jlh 7   Câncer: de 21 de junho a 22 de julho;
  Ago 8   Leão: de 23 de julho a 22 de agosto;
  Set 9   Virgem: de 23 de agosto a 22 de setembro;
  Out 10  Libra: de 23 de setembro a 22 de outubro;
  Nov 11  Escorpião: de 23 de outubro a 21 de novembro;
  Dez 12  Sagitário: de 22 de novembro a 21 de dezembro;*/

  const prompt = require("prompt-sync")();


var nome = prompt('Qual o seu nome?');
var niver = prompt('Qual o seu aniversário? Digite Mes/Dia/Ano:');
var data = new Date(new Date(niver).toDateString());
var dia = data.getDate();
var mes = (data.getMonth() + 1);


if(mes == 03 && dia <= 20){
    var signo = "Peixes";

} else if (mes == 11 && dia <= 21){
    signo = "Escorpião";

} else if(mes == 10 && dia <= 22){
    signo = "Libra";
    
} else if(mes == 9 && dia <= 22){
    signo = "Virgem";

} else if(mes == 8 && dia <= 22){
    signo = 'Leão';

} else if(mes == 7 && dia <= 22){
    signo = "Câncer";

} else if(mes == 6 && dia <= 20){
    signo = "Gêmeos";

} else if(mes == 5 && dia <= 20){
    signo = "Touro";

} else if(mes == 4 && dia <= 20){
    signo = "Áries";

} else if(mes == 12 && dia <= 22){
    signo = "Capricornio";

} else if(mes == 2 && dia <= 20){ 
    signo = "Aquário";

} else{
    signo = "Peixes";}


var mensagem = "";
var frase = [
    'Você tem uma grande necessidade de que outras pessoas gostem e admiram você.',
    'Você tem tendência a ser crítico consigo mesmo.',
    'Você tem uma grande quantidade de capacidade não utilizada, que não utilizou em seu proveito.',
    'Embora você tenha algumas fraquezas de personalidade, geralmente é capaz de compensá-las.',
    'Seu ajuste sexual apresentou problemas para você.',
    'Disciplinado e autocontrolado por fora, você tende a ser preocupante e inseguro por dentro.',
    'Às vezes, você tem sérias dúvidas se tomou a decisão certa ou fez a coisa certa.',
    'Você prefere uma certa mudança e variedade e fica insatisfeito quando é cercado por restrições e limitações.',
    'Você se orgulha de ser um pensador independente e não aceita as declarações dos outros sem provas satisfatórias.',
    'Você achou imprudente ser muito franco ao se revelar aos outros.',
    'Às vezes você é extrovertido, afável, sociável; outras vezes, é introvertido, cauteloso, reservado.',
    'Algumas de suas aspirações tendem a ser bastante irrealistas.',
    'A segurança é um dos seus principais objetivos na vida.'
]  


mensagem = frase[Math.floor(Math.random() * 15)];

console.log(nome+', seu signo é: '+ signo);
console.log(mensagem);
