/*No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 
== Eleições 2020 ==
  Digite sua idade: 17
  Você já pode votar? True */

  const prompt = require("prompt-sync")();

  var idade = 0;
  
  console.log("== Eleições 2020 ==");
  idade = prompt("Qual a sua idade?:  ");
  verificacao = idade >= 18;
  console.log("Habilitado para votar? " + verificacao);
  