export class Personaje {
    constructor(name = '', family = '', age = '', img) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.alive = true;
        this.Serie = 'Juegos de Tronos';
        this.img = img;
    }
}
