let n1, n2, n3, maiorN, menorN;
    n1 = prompt("Digite um número: ");
    n2 = prompt("Digite um número: ");
    n3 = prompt("Digite um número: ");
    
    function maiorNumero(n1, n2, n3){
       maiorN = Math.max(n1, n2, n3)
        return alert("O maior número é: " + maiorN)
       
    }
    function menorNumero(n1, n2, n3){
        menorN = Math.min(n1,n2, n3)
        return alert("O menor número é: " + menorN)
    }
    maiorNumero(n1, n2,n3)
    menorNumero(n1,n2,n3)