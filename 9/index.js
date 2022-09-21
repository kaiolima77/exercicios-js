let n1, n;
    n1 = prompt("Digite o primeiro número: ");
    n2 = prompt("Digite o segundo número: ");
    function calculos(n1, n2){
        soma = parseFloat (n1) + parseFloat (n2);
        sub = parseFloat (n1) - parseFloat (n2);
        mult = parseFloat (n1) * parseFloat (n2);
        divi = parseFloat (n1) / parseFloat (n2);
        return alert("O resultado da soma dos dois números é: " + soma + "\nO resultado da subtração dos dois números é:  " + sub + 
        "\nO resultado da multiplicação dos dois números é: " + mult + "\nO resultado da divisão dos dois números é: " + divi);
    }
    calculos(n1, n2);