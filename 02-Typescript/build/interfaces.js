const persona1 = {
    nombre: "Dennys",
    apellido: "Ferrer",
    edad: 34
};
function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona(persona1);
const coche1 = {
    marca: "BMW",
    modelo: "X6"
};
function mostrarCoche(cCoche) {
    console.log(cCoche);
}
mostrarCoche(coche1);
const coordenada = {
    x: 12345,
    y: 67890
};
const miBusqueda = (v, b) => {
    const result = v.search('b');
    return result > -1;
};
console.log(miBusqueda('hola', 'ola'));
class Adulto {
    constructor(pNombre, pEdad, pCoche) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.coche = pCoche;
    }
}
class Nino {
    constructor(pNombre, pEdad, pColegio) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.colegio = pColegio;
    }
}
