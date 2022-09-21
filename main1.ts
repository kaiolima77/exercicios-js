import { Cliente } from "./1/src/cliente";

    let cleinte1 = new Cliente("Kaio", 1000, "007-5", "Itau");

        cleinte1.verSaldo();
        cleinte1.deposito(500);
        cleinte1.verSaldo();
        cleinte1.sacar(600);
        cleinte1.verSaldo();