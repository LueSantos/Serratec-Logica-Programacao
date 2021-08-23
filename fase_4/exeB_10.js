/*Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
mod: resto; <>: diferente; ig: igual 
Nesse exercício você deverá manter as variáveis e substituir apenas os operadores. Pode ser necessário o uso de parênteses.
a) x - y M a
b) x - y * a M c mod y
c) y <> c
d) x * y <> c
e) c mod y mi y mod c
f) a m b
g) z / a + x * y - 5 MI b
h) c * z + 2 ig a * x + y
i) c ig z + b
j) y * 2 <> 7 - b */

var x = 6.0;
var y = 2;
var z = 4.000;
var a = 8;
var b = 7.5;
var c = 12

var quest_A = (x - y) > a;
var quest_B = x - (y * a) > (c % y);
var quest_C = y != c;
var quest_D = (x * y) != c;
var quest_E = (c % y) <= (y % c);
var quest_F = a < b;
var quest_G = (z / a) + (x * y) - 5 >= b;
var quest_H = (c * z) + 2 == (a * x) + y;
var quest_I = c == z + b;
var quest_J = (y * 2) != 7 - b;

console.log("\nA: " + quest_A + " \nB: "  + quest_B +  " \nC: "  + quest_C + " \nD: "  + quest_D +  " \nE: "  + quest_E +  " \nF: "  + quest_F +  " \nG: "  + quest_G +  " \nH: "  + quest_H +  " \nI: "  + quest_I +  " \nJ: "  + quest_J);