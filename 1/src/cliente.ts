export class Cliente {
    nome: string;
    saldo: number;
    agencia: string;
    banco: string;

    constructor(
        nome: string,
        saldo: number,
        agencia: string,
        banco: string,
    ){
        this.nome = nome
        this.saldo = saldo
        this.agencia = agencia
        this.banco = banco
    }

    verSaldo(){
        console.log(`O saldo da sua conta é R$ ${this.saldo}`)
    }

    sacar(valor: number){
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor
            console.log(`Saque de R$ ${valor} realizado com sucesso`);
        }else{
            console.log(`Saque de R$ ${valor} impossivel de ser realizado`);
        }
    }

    deposito(valor: number){
        if(valor > 0){
            this.saldo += valor
            console.log(`Deposito de R$ ${valor} realizado com sucesso`);
        }else{
            console.log(`Deposito de R$ ${valor} impossivel de ser realizado`);
        }
    }
}