import { Personaje } from './personaje.js';

export class Rey extends Personaje {
    constructor(name, family, age, yearsReign) {
        super(name, family, age);
        this.yearsReign = yearsReign;
        this.comunication = 'Vais a morir';
    }
}
