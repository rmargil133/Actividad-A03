class CifradoCesar {
  constructor(desplazamiento) {
    this.desplazamiento = desplazamiento;
  }

  codificar(texto) {
    let textoCodificado = '';
    for (let i = 0; i < texto.length; i++) {
      let caracter = texto[i];

      // Comprueba si el caracter es una letra del alfabeto
      if (caracter.match(/[a-zA-Z]/)) {
        let codigo = texto.charCodeAt(i);
        let esMayuscula = caracter === caracter.toUpperCase();
        let base = esMayuscula ? 65 : 97;

        // Aplica el desplazamiento y calcula el nuevo código ASCII
        let codigoCodificado = ((codigo - base + this.desplazamiento) % 26) + base;

        // Convierte el código ASCII al caracter correspondiente y lo agrega al texto codificado
        textoCodificado += String.fromCharCode(codigoCodificado).toUpperCase();
      } else {
        // Si el caracter no es una letra, lo agrega tal cual al texto codificado
        textoCodificado += caracter;
      }
    }
    return textoCodificado;
  }

  decodificar(texto) {
    let textoDecodificado = '';
    for (let i = 0; i < texto.length; i++) {
      let caracter = texto[i];

      // Comprueba si el caracter es una letra del alfabeto
      if (caracter.match(/[a-zA-Z]/)) {
        let codigo = texto.charCodeAt(i);
        let esMayuscula = caracter === caracter.toUpperCase();
        let base = esMayuscula ? 65 : 97;

        // Aplica el desplazamiento inverso y calcula el nuevo código ASCII
        let codigoDecodificado = ((codigo - base - this.desplazamiento + 26) % 26) + base;

        // Convierte el código ASCII al caracter correspondiente y lo agrega al texto decodificado
        textoDecodificado += String.fromCharCode(codigoDecodificado).toUpperCase();
      } else {
        // Si el caracter no es una letra, lo agrega tal cual al texto decodificado
        textoDecodificado += caracter;
      }
    }
    return textoDecodificado;
  }
}

// Ejemplo de uso:
let cifrado = new CifradoCesar(3);
let textoCodificado = cifrado.codificar('Hola, Mundo!');
document.write(`<p>${textoCodificado}</p>`);  // 'KROD, PXQGR!'

let textoDecodificado = cifrado.decodificar(textoCodificado);
document.write(`<p> ${textoDecodificado}</p>`);  // 'HOLA, MUNDO!'
