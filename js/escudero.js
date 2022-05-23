import { Luchador } from './luchador.js';
import { Personaje } from './personaje.js';

export class Escudero extends Personaje {
    constructor(
        name,
        family,
        age,
        img,
        pelotismo = '',
        servant = new Luchador()
    ) {
        super(name, family, age, img);
        this.pelotismo = pelotismo;
        this.servant = servant;
        this.comunication = '"Soy un loser"';
    }
}
