export class ContaBanco{ //Atributo
    titular: string;
    agencia: string;
    conta: string;
    saldo: number;

constructor (
    titular: string,
    agencia: string,
    conta: string,
    saldo: number,
    ){
        this.titular = titular;
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }
    verSaldo(){ //Metodo
        console.log(`O saldo da sua contá é R$ ${this.saldo}`);

    }
    sacar(valor: number){
        if (valor > 0 && valor <= this.saldo){
            this.saldo -= valor
            console.log(`Saque de R$ ${valor} realizado com sucesso`)
        }else{
            console.log(`Saque de R$ ${valor} impossível de ser realizado`)
        }
        
    }
    deposito(valor: number){
        if(valor > 0){
            this.saldo += valor
            console.log(`Deposito de R$ ${valor} realizado com sucesso`)
        }else{
            console.log(`Deposito de R$ ${valor} impossível de ser realizado`)
        }

    }
}