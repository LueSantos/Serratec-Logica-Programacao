//console.log("Bom dia");

// 


var alow = true;

const saudacoes = ["Bom dia!", "Boa tarde!", "Boa noite!"];
const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];

diasSemana.forEach((dia) => //simbolo  Arrow Functions = É uma simplificação das funções;
{
    console.log(`${dia}:`); 

    saudacoes.forEach((saudacao) =>
    {
        console.log(saudacao);
    })
})

if (alow)
{
    console.log("Tchau!");
}