import { Pessoa } from "./src/pessoa";
import { ContaBanco } from "./contaBanco";

//let pessoa1 = new Pessoa();

//pessoa1.nome = "Kaio";
//pessoa1.cpf = "209.702.447-54";
//pessoa1.idade = 19;
//pessoa1.telefone = "(21) 96556-7800";

//console.log(`O nome da pessoa é: ${pessoa1.nome}`);

let conta1 = new ContaBanco("Kaio", "005-4", "2540-22", 800);
//console.log(conta1.saldo);
conta1.deposito(500);
conta1.verSaldo();
conta1.sacar(300);
conta1.verSaldo();

