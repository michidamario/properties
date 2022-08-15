
class Perro {
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }
    hablar() {
        console.log(this.nombre + ' está ladrando.')
    }
}

const perrita = new Perro('Roma', 'Yorkshire', 3)
console.log(perrita)


