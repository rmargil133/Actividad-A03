function aplanarYOrdenar(matriz) {
    // Función recursiva para aplanar la matriz
    function aplanar(arr) {
      let resultado = [];
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          resultado = resultado.concat(aplanar(arr[i]));
        } else {
          resultado.push(arr[i]);
        }
      }
      return resultado;
    }
  
    const aplanada = aplanar(matriz);
  
    // Algoritmo de burbuja para ordenar la matriz
    for (let i = 0; i < aplanada.length - 1; i++) {
      for (let j = 0; j < aplanada.length - i - 1; j++) {
        if (aplanada[j] > aplanada[j + 1]) {
          // Intercambiar elementos si están en el orden incorrecto
          const temp = aplanada[j];
          aplanada[j] = aplanada[j + 1];
          aplanada[j + 1] = temp;
        }
      }
    }
  
    return aplanada;
  }
  
  const matriz = [[5, 4, 6], [2, 9, 3], [8, 1, 7]];
  const resultado = aplanarYOrdenar(matriz);
  document.write(`Matriz inicial: ${matriz} <br>`)
  document.write(`Matriz ordenada: ${resultado} <br>`);
  