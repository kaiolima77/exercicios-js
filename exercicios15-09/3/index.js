let fahreheint, resultado

    fahreheint = prompt("Digite a temperatura (em Fahreheint) a ser convertida para Celsius: ");
    function converter(){
    resultado = parseFloat(fahreheint - 32) * 0.55;
    return alert(resultado + "° Celsius");
    }
    converter(resultado);