import { Personaje } from './personaje.js';

export class Rey extends Personaje {
    constructor(name, family, age, img, yearsReign) {
        super(name, family, age, img);
        this.yearsReign = yearsReign;
        this.comunication = 'Vais a morir';
    }
}
