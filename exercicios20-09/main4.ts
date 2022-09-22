import { Animal } from "./4/src/animal";
import { Cachorro } from "./4/src/cachorro";
import { Cavalo } from "./4/src/cavalo";
import { Preguica } from "./4/src/preguica";

let cachorro1 = new Cachorro("Pinscher", "Preto", 08, "Bob");
let cavalo1 = new Cavalo(14, "Pesadelo");
let preguica1 = new Preguica(09, "The Flash");

cachorro1.emitirSom();
cavalo1.correr();
preguica1.subirEmArvore();