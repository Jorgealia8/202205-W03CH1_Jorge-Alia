import { Rey } from './Rey.js';
import { Luchador } from './Luchador.js';
import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';

let p1 = new Rey(
    'Joffrey Baratheon',
    'Baratheon',
    '14',
    './img/joffrey.jpg',
    '5'
);
let p2 = new Luchador(
    'Jaime Lannister',
    'Lannister',
    '34',
    './img/jaime.jpg',
    'axe',
    '8'
);
let p3 = new Luchador(
    'Daenerys Targaryen',
    'Targar',
    '31',
    './img/daenerys.jpg',
    'stones',
    '9'
);
let p4 = new Asesor(
    'Tyrion Lannister',
    'Lannin',
    '50',
    './img/tyrion.jpg',
    p3.name
);
let p5 = new Escudero('Bronn', 'Sinfa', '13', './img/bronn.jpg', '9', p2.name);

export let array = [p1, p2, p3, p4, p5];
