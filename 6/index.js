    let taxaImposto, custo;
    taxaImposto = prompt("Digite a taxa de imposto: ");
    custo = prompt("Digite o custo: ");
    
    function somaImposto(taxaImposto, custo){
    
    taxaImposto = (parseFloat(taxaImposto/100) * parseFloat(custo) + parseFloat (custo));
        return alert("O valor total das vendas é: " + taxaImposto)
}
    somaImposto(taxaImposto, custo)