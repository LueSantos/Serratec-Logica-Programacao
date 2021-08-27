
# FASE 05 - SELETORES OU CONDICIONAIS
*Dissertativos*

1. Qual o único valor avaliado por um seletor ‘se então’?
*Resposta = True*

2. Onde termina uma instrução if?
*Resposta = O if termina no ; da próxima instrução, a instrução que costumamos chamar de ‘a linha de baixo’.*

3.O que podemos fazer para que a manutenção de um condicional seja mais simples, ou mais legível, e ainda ajudar na depuração?
*Resposta = Separar em blocos por meio de abertura e fechamento de {chaves}*

4. Como podemos estender o seletor if, para que sempre uma instrução seja executada (um desvio)?

*Resposta = Desviando para o else, caso a expressão do if seja falsa*

5. É possível que mais de uma instrução seja executada por um condicional?
*Resposta = Sim, pode-se encadear uma dentro da outra*

6.É possível criar uma atribuição com desvio sem utilizar o senão?

*Resposta = Podemos podemos usar o switch case.*

7.Pra quê o seletor deve conter blocos?
*Resposta = Para permitir que vários comandos sejam executados pelo seletor.*

 # FASE 05 - ENCADEAMENTO

1. O que é um se encadeado?

*Resposta = É quando vários seletores são postos em sequência, ou seja, um if dentro do outro*

2. Para um condicional com dois “se”s e um senão, a qual if o else está vinculado (interno ou externo)?

*Resposta = Interno*

3. É possível inverter esse vínculo?
*Resposta = Sim. Basta declarar ele após o final do bloco interno.*

 # FASE 05 - SELETOR DE ESCOLHA (CASO)

1. Qual a semelhança entre os seletores “se” e “escolha”?

*Resposta = Pode utilizar blocos para executar várias instruções na mesma alternativa. E possui um ‘caso senão’, quando nenhum seletor atendeu ao valor de entrada. Esse é o valor padrão, ou default*

2. Com quais tipos de dados posso utilizar o switch? (JS e demais linguagens)

*Resposta = Qualquer tipo de dados em JS e em outras linguagens apenas ordinais.*

3. É necessário o uso de blocos para conjuntos de instruções?

*Resposta = Não.

4. Porquê as instruções posteriores ao caso atendido também são executadas?

*Resposta = Só serão executados todos os cases se não houver o break associado a instrução correspondente.*

5. Qual a função do break?

*Resposta = sair da condicional e interromper a instrução quando o caso é atendido.* 

6. Como relacionar várias alternativas a um mesmo conjunto de instruções?

*Resposta = Usando o switch case com o break no final das instruções.

7.Como criar uma alternativa para “nenhuma das anteriores”?

*Resposta = Por meio do default no final no final do case.*

8. Cite exemplos de quando usar e quando não usar um seletor caso.

*Resposta = Usamos quando temos: Lista de seleção, grupo de constantes, comparações de igualdade e quando mais de uma opção "mapeia" para o mesmo valor.*

*Resposta = Não usamos quando: Temos dois ou menos elementos a testar, quando o tipo de dados não são ordinais, quando o operador não é de igualdade e quando o valor das alternativas não é constante.