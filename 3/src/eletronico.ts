export class Eletronico{
    custo: number;
    nomeProduto: string;
    PaislOrigem: string;
    CriadoraDoproduto: string;

    constructor(
        custo: number,
        nomeProduto: string,
        PaislOrigem: string,
        CriadoraDoproduto: string,
    ){
        this.custo = custo
        this.nomeProduto = nomeProduto
        this.PaislOrigem = PaislOrigem
        this.CriadoraDoproduto = CriadoraDoproduto
    }

    preço(){
        console.log(`O produco custa R$ ${this.custo}.`)
    }

    nome(){
        console.log(`O nome do produto é: ${this.nomeProduto}.`)
    }

    pais(){
        console.log(`O país de origem do produto é ${this.PaislOrigem}.`)
    }

    empresa(){
        console.log(`A marca do produto é ${this.CriadoraDoproduto}.`)
    }
}