export class patinete {
    IdadeRecomendada: number;
    Preço: number;
    Cor: string;
    Modelo: string;

    constructor (
        IdadeRecomendada: number,
        Preço: number,
        Cor: string,
        Modelo: string,
    ){
        this.IdadeRecomendada = IdadeRecomendada
        this.Preço = Preço
        this.Cor = Cor
        this.Modelo = Modelo
    }

    verIdade(){
        console.log(`Idade recomendada: ${this.IdadeRecomendada} anos.`)
    }

    custo(){
        console.log(`Preço: R$ ${this.Preço}`)
    }

    Coloração(){
        console.log(`Cor: ${this.Cor}`)
    }

    modelo(){
        console.log(`Modelo: ${this.Modelo}`)
    }
}