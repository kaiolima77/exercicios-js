export class contaBancaria{
    saldo: number;
    banco: string;
    conta: string;
    cpf: string;

    constructor(
        saldo: number,
        banco: string,
        conta: string,
        cpf: string,
    ){
        this.saldo = saldo;
        this.banco = banco;
        this.conta = conta;
        this.cpf = cpf;
    }
    verSaldo(){
        console.log(`O seu saldo é de R$ ${this.saldo}`)
    }
    depositar(valor: number){
        if(valor > 0){
            this.saldo += valor;
            console.log(`Depósito de R$ ${valor} efetuado com sucesso!`);
        }
        else{
            console.log(`Depósito de R$ ${valor} não pôde ser efetuado! :(`)
        }
        
    }
    sacar(valor: number){
        if(valor > 0 && valor <= this.saldo){
            this.saldo -= valor
            console.log(`Saque de R$ ${valor} efetuado com sucesso!`);
        }
        else{
            console.log(`Saque de R$ ${valor} negado!`)
        }
    }
}