/*Desenvolva um sistema em que:
Leia 4 (quatro) números;
Calcule o quadrado de cada um;
Se o valor resultante do quadrado do terceiro for &gt;= 1000, imprima-o e finalize;
Caso contrário, imprima os valores lidos e seus respectivos quadrados.
*/

let n1, n2, n3, n4, r1, r2, r3, r4;
    n1 = prompt("Digite um número: ");
    n2 = prompt("Digite um número novamente: ");
    n3 = prompt("Digite um número novamente: ");
    n4 = prompt("Agora digite um ultimo número: ");

    r1 = n1 * n1;
    r2 = n2 * n2;
    r3 = n3 * n3;
    r4 = n4 * n4;
    if(r3>=1000){
        alert("O resultado da raiz quadrada do terceiro número é: " + r3);
    }
    else{
        alert("O resultado da raiz quadrada do primeiro n° é: " + r1)
        alert("O resultado da raiz quadrada do segundo n° é: " + r2)
        alert("O resultado da raiz quadrada do terceiro n° é: " + r3)
        alert("O resultado da raiz quadrada do quarto n° é: " + r4)
    }