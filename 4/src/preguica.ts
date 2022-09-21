import { Animal } from "./animal";
export class Preguica extends Animal{
    idade: number;
    nome: string;
    constructor(
        idade: number,
        nome: string,
    ){
        super(idade, nome);
    }

    subirEmArvore(){
        console.log(`Estou subindo em uma árvore`);
    }
}