import { Luchador } from './luchador.js';
import { Personaje } from './personaje.js';

export class Escudero extends Personaje {
    constructor(name, family, age, pelotismo = '', servant = new Luchador()) {
        super(name, family, age);
        this.pelotismo = pelotismo;
        this.servant = servant;
        this.comunication = '"Soy un loser"';
    }
}
