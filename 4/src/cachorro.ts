import { Animal } from "./animal";
export class Cachorro extends Animal{
    raca: string;
    cor: string;

    constructor(
        raca: string,
        cor: string,
        idade: number,
        nome: string
    ){
        super(idade, nome);
        this.raca = raca;
        this.cor = cor;
    }
    emitirSom(): void {
        console.log(`Au au au`);
    }
    correr(): void {
        console.log(`Estou correndo como um cachorro`);
    }
}