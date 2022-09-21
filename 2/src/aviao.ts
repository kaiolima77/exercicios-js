export class Aviao{
    passageiros: number;
    Tempodeviagem: number;
    LocalSaida: string;
    LocalChegada: string;

    constructor(
        passageiros: number,
        Tempodeviagem: number,
        LocalSaida: string,
        LocalChegada: string,
    ){
        this.passageiros = passageiros
        this.Tempodeviagem = Tempodeviagem
        this.LocalSaida = LocalSaida
        this.LocalChegada = LocalChegada
    }

    QuantidadePassageiros(){
        console.log(`A quantidade de passageiros no avião é de ${this.passageiros}.`)
    }

    ViagemHoras(){
        console.log(`A viagem irar durar ${this.Tempodeviagem} horas.`)
    }

    Saida(){
        console.log(`O local de saida do avião é ${this.LocalSaida}.`)
    }

    Chegada(){
        console.log(`O local de chegada do avião é ${this.LocalChegada}`)
    }
}