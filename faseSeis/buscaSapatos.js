
var sapato = [];
// não está aparecendo a lista no console;
sapato[0] = "Sandalia";
sapato[1] = "Mocacim";
sapato[2] = "Bota";
sapato[3] = "Chuteira";
sapato[4] = "Rasteirinha";
sapato[5] = "Sapatilha";
sapato[6] = "Tamanco";
sapato[7] = "Kichute";
sapato[8] = "Tenis";
sapato[9] = "Havaianas";


var pesquisa = "Sapatilha";
var encontrei = -1;

for (var i = 0; i < sapato.length; i++) {

if (sapato[i] == pesquisa){
        encontrei = i;
        break;
    }
} 

if (encontrei > - 1) {
    console.log("Seu sapato está na gaveta " + encontrei);
    }
    else{
        console.log("Sapato não encontrado");
        }


