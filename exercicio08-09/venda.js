let custo, venda, acrescimo

    custo = prompt("Informe o preço de custo do produto: ")
    acrescimo = prompt("Informe o acrescimo em porcentagem em cima do preço de custo do produto: ")

    venda =  parseFloat(custo) + custo * acrescimo/100
    alert("O valor de venda é: " + venda)