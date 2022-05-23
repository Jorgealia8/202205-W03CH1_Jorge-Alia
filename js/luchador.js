import { Personaje } from './personaje.js';

export class Luchador extends Personaje {
    constructor(name, family, age, img, weapon = '', skill = '') {
        super(name, family, age, img);
        this.weapon = weapon;
        this.skill = skill;
        this.comunication = 'Primero pego y luego pregunto';
    }
}
