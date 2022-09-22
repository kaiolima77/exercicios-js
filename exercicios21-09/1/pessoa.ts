export class Pessoa{
    private nome: string;
    private dia: string;
    private mes: string;
    private ano: number;
    private altura: number;


   constructor(
    nome: string,
    dia: string,
    mes: string,
    ano: number,
    altura: number
   ){
    this.nome = nome;
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
    this.altura = altura;
    }
    verNome(){
        console.log(`Nome: ${this.nome}`);
    }
    
    verAltura(){
        console.log(`Altura: ${this.altura}`);
    }
    dataDeNascimento(){
        console.log(`Data de nascimento: ${this.dia}/${this.mes}/${this.ano}`)
    }
    
    verIdade(){
        console.log(`Idade: ${2022 - this.ano}`);
    }
}