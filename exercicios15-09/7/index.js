let horario, minutos
horario = prompt("Informe a hora: ")
minutos = prompt("Informe os minutos: ")

function converter(horario){
       if(horario >=0 && horario <= 12){
        return alert(horario + ":" + minutos + " am")
    }else{
        horario = parseFloat(horario) - 12
        return alert(horario + ":" + minutos + " pm")
    }
}
converter(horario, minutos)

do{
    horario = prompt("Informe a hora: ")
    minutos = prompt("Informe os minutos: ")
    converter(horario, minutos)
}while(horario > 0 && minutos >= 0)