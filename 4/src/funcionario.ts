export class Funcionario{
    HorasTrabalho: number;
    LocalTrabalho: string;
    QualTrabalho: string;
    Salario: number;

    constructor(
        HorasTrabalho: number,
        LocalTrabalho: string,
        QualTrabalho: string,
        Salario: number,
    ){
        this.HorasTrabalho = HorasTrabalho
        this.LocalTrabalho = LocalTrabalho
        this.QualTrabalho = QualTrabalho
        this.Salario = Salario
    }

    Horas(){
        console.log(`O trabalho durá ${this.HorasTrabalho} horas.`)
    }

    lugar(){
        console.log(`O local de trabalho é ${this.LocalTrabalho}`)
    }

    profissao(){
        console.log(`A profissão é ${this.QualTrabalho}`)
    }

    dinheiro(){
        console.log(`O Salario é de R$ ${this.Salario}`)
    }
}