/*Receber valores de base e altura de um triângulo e verificar se são valores válidos
(positivos maiores que zero). Em caso afirmativo, calcular a área do triângulo.
8) Construa um sistema para ler uma variável numérica N e imprimi-la somente se a mesma
for maior que 100, caso contrário imprimi-la com o valor zero.*/

let numero
    numero = prompt("Digite um número: ")
    if(numero >100){
        alert("" + numero)
    
    }
    else {
        numero = 0
        alert("" + numero)
    }