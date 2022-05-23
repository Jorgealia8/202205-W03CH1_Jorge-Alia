import { Personaje } from './personaje.js';

export class Asesor extends Personaje {
    constructor(name, family, age, client = new Personaje()) {
        super(name, family, age);
        this.comunication = 'No sé por qué, pero creo que voy a morir pronto';
        this.client = client;
    }
}
