/* Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.
Digite a temperatura: 36.9
Usa máscara (S ou N): N
Autorizar a entrada? False
 */


const prompt = require("prompt-sync")();

var temperatura = prompt("Qual é temperatura?: ");
var verificar_mascara = prompt("Está de máscara? (digite S para sim ou N para não: : ");

var liberada = true;

liberada = (temperatura < 37.5) && (verificar_mascara == "S" || "s");

if (liberada){
     console.log("Liberar entrada.")
}
else {
console.log("Negar entrada.");
}
