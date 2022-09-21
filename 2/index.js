let celsius, resultado;
    celsius = prompt("Digite a temperatura (em celsius) a ser convertida para Fahrenheit: ");
    function converter(){
    resultado = parseFloat (celsius * 1.8) + 32;
    return alert(resultado + "° F");
    }
    converter(resultado)
