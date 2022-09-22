export class paciente{
    temperatura: number;
    peso: number;
    altura: number;
    idade: number;

    constructor(
        temperatura: number,
        peso: number,
        altura: number,
        idade: number,
    ){
        this.temperatura = temperatura;
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;

    }
    qualTemperatura(graus: number){
        if(graus >=38 ){
        console.log(`Você está com febre!`);
    }else{
        console.log(`Você não está com febre!`);
    }

    }
    qualIdade(){
        if(this.idade >= 18){
            console.log(`O paciente deverá fazer o teste de covid`);
        }
        else{
            console.log(`O paciente está liberado!`);
        }
    }
    qualAltura(){
        console.log(`A altura do paciente é: ${this.altura}m`)
    }
    qualPeso(){
        console.log(`O paciente está pesando ${this.peso} kg`)
    }
    }
    
    
