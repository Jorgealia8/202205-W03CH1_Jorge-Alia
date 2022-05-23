import { Personaje } from './personaje.js';

export class Asesor extends Personaje {
    constructor(name, family, age, img, client = new Personaje()) {
        super(name, family, age, img);
        this.comunication = 'No sé por qué, pero creo que voy a morir pronto';
        this.client = client;
    }
}
