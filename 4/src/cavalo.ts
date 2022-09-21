import { Animal } from "./animal";

export class Cavalo extends Animal{
    idade: number;
    nome: string;

    constructor(
        idade: number,
        nome: string,
    ){
        super(idade, nome);
    }
    
    
    correr(): void {
        console.log(`Estou correndo como um cavalo`);
    }
    emitirSom(): void {
        console.log(`Hiin in in`);
    }

}