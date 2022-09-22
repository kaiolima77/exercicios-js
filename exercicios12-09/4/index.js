//Faça um sistema que leia um número inteiro e mostre uma mensagem indicando se este
//número é par ou ímpar, e se é positivo ou negativo.

let numero
    numero = prompt("Digite um número: ");
    
    if(numero < 0 && numero % 2==0){
    alert("O número é negativo e é par");
       
    }
    else if(numero >= 0 && numero % 2!=0){
        alert("O número é positivo e é ímpar");
   
    }
    else if(numero >= 0 && numero % 2==0){
        alert("O número é positivo e é par");
   
    }
    else if(numero <= 0 && numero % 2!=0){
        alert("O número é negativo e é ímpar");
   
    }