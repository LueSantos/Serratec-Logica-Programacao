/*O abecedário da Xuxa agora segue cantando a definição musical até que a criança decida parar de ouvir, pressionando o zero.*/


const perguntar = require("prompt-sync")();


do {
    var letra = perguntar (" Digite uma letra do alfabeto para acessar um trecho da música: ");
    var letraDaMusica = letra.toUpperCase();
    var continuar = "S";
    
    switch (letraDaMusica) {

    case "A": console.log("A de amor!"); break;
    case "B": console.log("B de baixinho!"); break;
    case "C": console.log("C de coração!"); break;
    case "D": console.log("D de docinho!"); break;
    case "E": console.log("E de escola!"); break;
    case "F": console.log("F de feijão!"); break;
    case "G": console.log("G de gente!"); break;
    case "H": console.log("H de humano!"); break;
    case "I": console.log("I de igualdade!"); break;
    case "J": console.log("J de juventude!"); break;
    case "L": console.log("L de liberdade!"); break;
    case "M": console.log("M de molecagem!"); break;
    case "N": console.log("N de natureza!"); break;
    case "O": console.log("O de obrigado!"); break;
    case "P": console.log("P de proteção!"); break;
    case "Q": console.log("Q de quero-quero!"); break;
    case "R": console.log("R de riacho!"); break;
    case "S": console.log("S de saudade!"); break;
    case "T": console.log("T de terra!"); break;
    case "U": console.log("U de universo!"); break;
    case "V": console.log("V de vitória!"); break;
    case "X": console.log("X de Xuxa!"); break;
    case "Z": console.log("Z é zum-zum-zum-zum-zum!"); break;    
    }
    continuar = perguntar ("Deseja repetir a letra da música?").toUpperCase();
}   while (continuar == "S")
   console.log("Agradecemos pela preferência");