import { Rey } from './Rey.js';
import { Luchador } from './Luchador.js';
import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';

let p1 = new Rey('Joffrey Baratheon', 'Baratheon', '14', '5');
let p2 = new Luchador('Jaime Lannister', 'Lannister', '34', 'axe', '8');
let p3 = new Luchador('Daenerys Targaryen', 'Targar', '31', 'stones', '9');
let p4 = new Asesor('Tyrion Lannister', 'Lannin', '50', 'Daenerys');
let p5 = new Escudero('Bronn', 'Sinfa', '13', '9', 'Jaime');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
