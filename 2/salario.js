/*Elabore um sistema que leia as variáveis C e N, respectivamente código e número de
horas trabalhadas de um operário. E calcule o salário sabendo-se que ele ganha R$ 10,00
por hora. Quando o número de horas exceder a 50 calcule o excesso de pagamento
armazenando-o na variável E, caso contrário zerar tal variável. A hora excedente de
trabalho vale R$ 20,00. No final do processamento imprimir o salário total e o salário
excedente.*/

let salario, horasTrabalhadas, excesso, se, total, cod;
    cod = prompt("Digite o código do trabalhador: ");
    horasTrabalhadas = prompt("Diga quantas horas você trabalhou: ");
    salario = horasTrabalhadas * 10.00
    if(horasTrabalhadas > 50){
        excesso = horasTrabalhadas - 50;
        se = excesso * 20.00;
        total = salario + se
        alert ("Seu salário excedente é de: R$" + se + " e seu salário total é de: R$" + total);
        
    }
    else if(horasTrabalhadas<=50){
        salario = horasTrabalhadas * 10.00
        alert("Seu salário é de: R$" + salario)
    }

    // salario = salario total
    // horastrabalhadas = total de horas que trabalhou
    // excesso = excesso de horas que trabalhou
    //se = salario excedente