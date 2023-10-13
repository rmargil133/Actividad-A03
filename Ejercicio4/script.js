// Definir la clase Persona
class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  getInfo() {
    document.write(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}<br>`);
  }
}

// Definir la clase Estudiante que hereda de Persona
class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }

  matriculado() {
    document.write(`${this.nombre} se ha matriculado en el curso ${this.curso} y en el grupo ${this.grupo}<br>`);
  }
}

// Definir la clase Profesor que hereda de Persona
class Profesor extends Persona {
  constructor(nombre, edad, genero, modulo, nivel) {
    super(nombre, edad, genero);
    this.modulo = modulo;
    this.nivel = nivel;
  }

  imparte() {
    document.write(`${this.nombre} imparte el módulo ${this.modulo} de nivel ${this.nivel}<br>`);
  }
}

// Crear objetos y casos de prueba
const persona = new Persona("Ruben", 20, "Masculino");
const estudiante = new Estudiante("Pablo", 20, "Masculino", "2ºDAW", "Grupo A");
const profesor = new Profesor("Marcos", 40, "Masculino", "DIW", "Avanzado");

persona.getInfo();
estudiante.getInfo();
estudiante.matriculado();
profesor.getInfo();
profesor.imparte();
