let numero = 0, contador = 0, soma = 0
numero = prompt("Informe um numero")
do{
    contador = contador + 1
    soma = soma + contador
}while(contador != numero)
alert("O resultado é " + soma)