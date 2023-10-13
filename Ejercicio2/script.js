    // Inicializar contador de resultados
    let resultados = {};

    // Realizar 36,000 lanzamientos
    for (var i = 0; i < 36000; i++) {
      // Lanzar dos dados
      let dado1 = Math.floor(Math.random() * 6) + 1;
      let dado2 = Math.floor(Math.random() * 6) + 1;

      // Sumar los resultados de los dados
      let suma = dado1 + dado2;

      // Incrementar el contador correspondiente al resultado de la suma
      if (resultados[suma]) {
        resultados[suma]++;
      } else {
        resultados[suma] = 1;
      }
    }

    // Obtener la referencia al elemento resultados
    let resultadosElement = document.getElementById("resultados");

    // Mostrar los resultados
    for (let suma = 2; suma <= 12; suma++) {
      let conteo = resultados[suma] || 0;

      // Crear un elemento de párrafo para mostrar la suma y el conteo
      let resultadoElement = document.createElement("p");
      resultadoElement.textContent = "El número " + suma + " salió: " + conteo + " veces";

      // Agregar el elemento de resultado al contenedor de resultados
      resultadosElement.appendChild(resultadoElement);
    }