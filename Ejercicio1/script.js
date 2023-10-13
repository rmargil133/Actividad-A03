//funcion que repetira la palabra en funcion del numero de veces introducido
function repiteString(n) {
    return (n>0) ? `${palabra} ${repiteString(n-1)}` : '' ;
}
//variable que almacena la palabra a repetir 
const palabra = "bauuuba"
//El numero de veces introducido se almacena en esta variable en tiempo de ejecución
let num = prompt("Numero de veces que quiere repetir la palabra");

//Comprobamos si el valor introducido es igual al valor introducido, es mayor que 0 y que que el módulo (%) del numero dividido por 1 sea igual a 0 si todo
//se cumple sera un numero entero y accede al elemento del documento HTML con el identificador "repetir" y establece su contenido HTML 
//en el resultado de la función repiteString() y en caso de no serlo se muestra un mensaje de error.
if(!isNaN(num) 
	&& Number (num) == num 
	&& num > 0 
	&& (num%1) == 0
	){
  	document.getElementById("repetir").innerHTML = repiteString(num);
}

else{
  alert("Error: El valor introducido no es un número");
}