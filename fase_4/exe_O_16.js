/* O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.
Mês do seu nascimento: 01
Dia do aniversário: 25
Você é inteligente? True!

 */

const prompt = require("prompt-sync")();

var dia_aniversario = 0;
var mes_aniversário = 0;

var dia_aniversario = prompt("\nQual é o dia do seu aniversário?: ");
var mes_aniversário = prompt("\nQual é o mês do seu aniversário?: ");


var signo = true;

signo = dia_aniversario > 20 && mes_aniversário == 1 || dia_aniversario < 18 && mes_aniversário == 2;

console.log("\né inteligente?" + signo);

