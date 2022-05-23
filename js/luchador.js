import { Personaje } from './personaje.js';

export class Luchador extends Personaje {
    constructor(name, family, age, weapon = '', skill = '') {
        super(name, family, age);
        this.weapon = weapon;
        this.skill = skill;
        this.comunication = 'Primero pego y luego pregunto';
    }
}
