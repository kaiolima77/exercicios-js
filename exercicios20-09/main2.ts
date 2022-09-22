import { contaBancaria } from "./2/contaBancaria";
    
    let contaBanco = new contaBancaria(600, "Santander", "0009-22", "209.702.447-5");
    contaBanco.depositar(400);
    contaBanco.verSaldo();
    contaBanco.sacar(200);
    contaBanco.verSaldo();