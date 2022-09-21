/*A prefeitura de uma cidade fez uma pesquisa entre 20 de seus habitantes,
coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:  
a) média do salário da população;
b) média do número de filhos;
c) maior salário;
d) percentual de pessoas com salário até R$100,00.*/

let filhos = 0; salario = 0.0; pessoas100 = 0.0; mediaS = 0.0; mediaF = 0.0; porcentagem = 0.0; maiorS = 0.0;
    for(i = 0; i <= 20; i++){
    salario = prompt("Qual é o seu salário? ");
    filhos = prompt("Diga quantos filhos você tem: ");
    
    if(salario <= 100){
        parseFloat (pessoas100++);
       
    }
    if(salario > maiorS){
        maiorS = parseFloat (salario);
    }
    
    }
    porcentagem = parseFloat (pessoas100 * 100) /parseFloat (4);
    mediaF = parseInt (mediaF) + parseInt (filhos);
    mediaS = parseFloat (mediaS) + parseFloat (salario);
    alert("A média de salário da população é: " + mediaS + "A média de filhos da população é de: " + mediaF + "O maior salário é de: R$" + mediaS +"O percentual de pessoas que recebe até R$100 é de: "+ porcentagem + "%" );
    
    

