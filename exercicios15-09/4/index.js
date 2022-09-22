let imc, peso, altura
    peso = prompt("Informe seu peso (em kg): ")
    altura = prompt("Informe sua altura (em metro e cm): ")
    
    function indice(){
        imc = parseFloat(peso) /parseFloat (altura * altura)
        return alert("Você está " + imc.toFixed(1) + "kg abaixo do peso")
    }
    indice (imc)