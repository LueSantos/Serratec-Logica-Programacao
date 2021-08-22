/*O programa “termômetro” lê uma temperatura em graus Celsius, e devolve sua equivalência na escala Fahrenheit.*/

const prompt = require("prompt-sync")();

var temperaturaCelsius = prompt("Qual a temperatura em Celsius?");
var Fahrenheit = temperaturaCelsius * 1.8 + 32;

console.log("A temperatura em Fahrenheit é:  " + Fahrenheit);