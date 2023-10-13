        // Definición del constructor de objetos Ghost
        function Ghost() {
            // Lista de colores disponibles
            this.colors = ["cian", "fuxia", "rojo", "azul", "verde", "amarillo", "rosa", "naranja", "morado", "marron"]; /* Añadido el color marrón a la lista de colores */

            // Propiedad color que almacena el color actual del objeto Ghost
            this.color = this.getRandomColor();
        }
 
        // Método para obtener un color aleatorio de la lista de colores
        Ghost.prototype.getRandomColor = function() {
            // Genera un índice aleatorio basado en la longitud de la lista de colores
            var randomIndex = Math.floor(Math.random() * this.colors.length);

            // Devuelve el color correspondiente al índice aleatorio generado
            return this.colors[randomIndex];
        };

        // Crear un array para almacenar los colores generados
        var colores = [];

        // Generar 1000 colores y agregarlos al array
        for (var i = 0; i < 1000; i++) {
            colores.push(new Ghost());
        }

        // Obtener el contenedor de colores por su ID
        var colorContainer = document.getElementById("color-container");

        // Iterar sobre los colores en el array
        for (var j = 0; j < colores.length; j++) {
            // Obtener el color actual del array
            var ghost = colores[j];

            // Crear un elemento div para representar el cuadro de color
            var colorBox = document.createElement("div");

            // Asignar la clase correspondiente al cuadro de color según el color actual del objeto Ghost
            colorBox.className = "color-box " + ghost.color;

            // Mostrar el nombre del color dentro del cuadro de color
            colorBox.textContent = ghost.color;

            // Agregar el cuadro de color al contenedor
            colorContainer.appendChild(colorBox);
        }