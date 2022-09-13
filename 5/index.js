/*A Secretaria de Meio Ambiente que controla o índice de poluição mantém 3 grupos de
indústrias que são altamente poluentes do meio ambiente. O índice de poluição aceitável
varia de 0,05 até 0,25. Se o índice sobe para 0,3 as indústrias do 1º grupo são intimadas a
suspenderem suas atividades, se o índice crescer para 0,4 as industrias do 1º e 2º grupo são
intimadas a suspenderem suas atividades, se o índice atingir 0,5 todos os grupos devem ser
notificados a paralisarem suas atividades. Faça um sistema que leia o índice de poluição
medido e emita a notificação adequada aos diferentes grupos de empresas.
*/

let indice
indice = prompt("Qual é o índice de poluição atual?")
if(indice < 0.3){
    alert("O indice é aceitável")
}
else if(indice < 0.4){
    alert("Industrias do 1º grupo, vocês estão intimadas a suspenderem suas atividades")
}
else if(indice < 0.5){
    alert("1° e 2° grupo, vocês estão intimadas a suspenderem suas atividades")
}
else{
    alert("Todos os grupos, vocês estão intimados a paralisarem suas atividades")
}
