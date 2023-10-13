//lfunción eval() para evaluar la operacion matematica proporcionada y obtener el resultado de la operación. 
function calculadora(expresion) {
    return eval(expresion);
  }
  const resultado = document.getElementById("resultado");
  
  // Ejemplos de entrada
  const operacion1 = "2*5-3";
  const resultado1 = calculadora(operacion1);
  console.log('El resultado de 2*5-3 es: ' + resultado1); // Resultado: 7
  
  const operacion2 = "(7*7*7)+(3-1)*8";
  const resultado2 = calculadora(operacion2);
  console.log('El resultado de (7*7*7)+(3-1)*8 es: ' + resultado2); // Resultado: 359
  
  const operacion3 = "4-2";
  const resultado3 = calculadora(operacion3);
  console.log('El resultado de 4-2 es: ' + resultado3); // Resultado: 2
  