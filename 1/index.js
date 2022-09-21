let n1, n2, porc
    n1 = prompt("Digite um número ")
    n2 = prompt("Digite a porcentagem que deseja de " + n1)


    function porcentagem(n1, n2){
        resultado = (parseInt (n1) / 100) * parseInt(n2)
        return alert(resultado)
    }
    porcentagem(n1, n2)
