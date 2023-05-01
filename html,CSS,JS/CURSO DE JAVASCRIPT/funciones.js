//Declaramos la función
function funcion(a, b) {
  a = a + b;
  console.log(arguments.length); //Imprime el numero de parametros/argumentos dentro de la función.
  console.log("Suma de a+b:" + a);
}
let funcionTxt = funcion.toString(); //también se puede convertir el contenido de la función a texto e imprimirlo en consola.
console.log(funcionTxt);
//Una función retornante regresa un valor a una variable fuera de la función
//De manera que el resultado de la función puede utilizarse fuera de ella.
function funcionRetornante(a, b) {
  return a * b;
}
funcion(5, 2); //Mandamos llamar la función.

let resultado = funcionRetornante(5, 5);
console.log(resultado);

//Otra forma de declarar y utilizar funciones:
//A este tipo de funciones se les conoce como tipo Expresión
let x = function (a, b) {
  return a - b;
};
resultado = x(10, 5);
console.log(resultado);

//Funciones anonimas/Self Invoking
(function (a, b) {
  console.log("Ejecutando la función: " + a, b);
})(3, 4);
//Este tipo de funciones se llaman a si mismas no pueden reutilizarse

//Funciones Flecha
//"NombreDeLaFuncion"=(parametros)=>operacion de la funcion.
const flecha = (a, b) => a * b;
resultado = flecha(3, 5);
console.log(resultado);

/*NOTA: los parametros y argumentos generalmente son llamados como una misma cosa, es decir, como sinonimos, aunque en la practica parece que esto asi es
teoricamente no son lo mismo, los parametros son las variables que se declaran dentro de los parentesis de una funcion
mientras que los argumentos son los valores que le damos a la funcion al momento de mandarla a llamar en el codigo*/
//Para ver a detalle como funciona esto podemos poner un ejemplo:

function parametros(a = 4, b = 5) {
  //al crear una función esta crea consigo misma el arreglo "arguments" el cual almacena los argumentos que recibe la función
  console.log(arguments[0]); //Al imprimir el valor de los argumentos vemos que no están definidos, ya que no añadimos valores al mandar llamar la función
  console.log(arguments[1]);
  return a + b;
}

resultado = parametros(); //Mandamos llamar la función sin agregarle valores
console.log(resultado); //Aún cuando no agregamos valores a la función esta aún nos imprime un resultado, ya que sus parametros si tenían valores
//Aún cuando le asignamos valores a los parametros, estos pueden ser sobreescritos si le agregamos valores a los parametros cuando llamamos la función

//Ejercicio, sumar todos los valores de una función UTILIZANDO solamente los ARGUMENTOS, sin indicarle parametros a la función.

resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);

function sumarTodo() {
  let suma = 0;
  for (let index = 0; index < arguments.length; index++) {
    suma += arguments[index];
  }
  return suma;
}

