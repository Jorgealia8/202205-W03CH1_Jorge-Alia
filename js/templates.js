import { Rey } from './Rey.js';
import { Luchador } from './Luchador.js';
import { Asesor } from './Asesor.js';
import { Escudero } from './Escudero.js';

export function imprim(personaje) {
    let statePersonaje;
    if (personaje.state === true) {
        statePersonaje = `<i class="fas fa-thumbs-down"></i>`;
    } else {
        statePersonaje = `<i class="fas fa-thumbs-up"></i>`;
    }

    let impr = ``;
    if (personaje instanceof Rey) {
        impr = `<li>Años de reinado: ${personaje.yearsReign}</li>`;
    }
    if (personaje instanceof Luchador) {
        impr = `<li>Arma: ${personaje.weapon}</li>
                    <li>Destreza: ${personaje.skill}</li>`;
    }
    if (personaje instanceof Escudero) {
        impr = `<li>Peloteo: ${personaje.pelotismo}</li>
                <li>Sirve a: ${personaje.servant}</li> `;
    }
    if (personaje instanceof Asesor) {
        impr = `<li>Asesora a: ${personaje.client}</li>`;
    }

    return `

<li class="character col">
    <div class="card character__card">
        <img
            src="${personaje.img}"
            alt="${personaje.name} ${personaje.family}"
            class="character__picture card-img-top"
        />
        <div class="card-body">
            <h2 class="character__name card-title h4">${personaje.name} ${personaje.family}</h2>
            <div class="character__info">
                <ul class="list-unstyled">
                    <li>Edad: ${personaje.age}</li>
                    <li>
                        Estado: ${statePersonaje};  
                    </li>
                </ul>
            </div>
            <div class="character__overlay">
                <ul class="list-unstyled">
                    ${impr};
                </ul>
                <div class="character__actions">
                    <button class="character__action btn">habla</button>
                    <button class="character__action btn">muere</button>
                </div>
            </div>
        </div>
        <i class="emoji"></i>
    </div>
</li>;
`;
}
