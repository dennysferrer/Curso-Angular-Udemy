interface Persona {
    nombre: string,
    apellido: string,
    edad: number
}


const persona1: Persona = {
    nombre: "Dennys",
    apellido: "Ferrer",
    edad: 34
}

function mostrarPersona(pPersona: Persona){
    console.log(pPersona);
}


mostrarPersona(persona1);

// Propiedades opcionales

interface Coche {
    marca: string,
    modelo: string,
    color?: string
}

const coche1: Coche = {
    marca: "BMW",
    modelo: "X6"
}

function mostrarCoche(cCoche: Coche){
    console.log(cCoche);
}

mostrarCoche(coche1);

// Propiedades de solo lectura

interface Punto {
    readonly x: number,
    readonly y: number
}

const coordenada: Punto = {
    x: 12345,
    y: 67890
}

//Definir una función en una interface

interface Busqueda {
    (valor: string, buscar: string): boolean
}

const miBusqueda: Busqueda = (v: string, b: string): boolean => {
    const result = v.search('b');
    return result>-1
}

console.log(miBusqueda('hola', 'ola'));


// Implementación de interfaces en clases

interface Humano {
    nombre: string,
    edad: number
}

class Adulto implements Humano {
    nombre: string;
    edad: number;
    coche: boolean;
    constructor(pNombre: string, pEdad: number, pCoche:boolean){
        this.nombre = pNombre;
        this.edad = pEdad;
        this.coche = pCoche;
    }
}

class Nino implements Humano {
    nombre: string;
    edad: number;
    colegio: boolean
    constructor (pNombre:string, pEdad:number, pColegio:boolean){
        this.nombre = pNombre;
        this.edad = pEdad;
        this.colegio = pColegio;
    }
}