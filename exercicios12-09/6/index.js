/*Elabore um sistema que dada a idade de um nadador classifique-o em uma das seguintes
categorias:
Infantil A = 5 a 7 anos
Infantil B = 8 a 11 anos
Juvenil A = 12 a 13 anos
Juvenil B = 14 a 17 anos
Adultos = Maiores de 18 anos
*/

let idade
    idade = prompt("Qual é a sua idade? ");
    if(idade ==5 || idade == 6 || idade == 7){
        alert("Você é da categoria Infantil A");
    }
    if(idade == 8 || idade == 9 || idade == 10 || idade == 11){
    alert("Você é da categoria Infantil B");
    }
    if(idade == 12 || idade == 13){
        alert("Você é da categoria Juvenil A");
    }
    if(idade == 14 || idade == 15 || idade == 16 || idade == 17){
        alert("Você é da categoria Juvenil B");
    }
    if(idade >=18){
        alert("Você é da categoria Adulto");
    }
    