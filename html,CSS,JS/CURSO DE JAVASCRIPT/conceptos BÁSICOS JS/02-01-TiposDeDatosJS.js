/*Ejemplos de tipos de datos en JS
 */
//Tipo de dato String
var nombre = "Victor";
console.log(nombre);
console.log(typeof nombre);
//Las variables pueden ser cambiadas en cualquier momento, incluso su tipo de dato ya que son variables dinámicas
nombre = 10;
//TypeOf se utiliza para saber que tipo de dato es a variabe en cuestión.
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);
console.log(typeof numero);

//Tipo de dato Object
var objeto = {
  nombre: "Juan",
  apellido: "Perez",
  telefono: "1234567890",
};
console.log(objeto);
console.log(typeof objeto);

//Tipo de dato booleano(true,false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);
bandera = false;

//Tipo de dato Function
/*Dentro de los parentesis van los valores que recibirá la función y dentro de las llaves irá el código que ejecutará la función.
Basicamente, una funcion en JS es como un método en Java*/
function miFuncion() {}
console.log(miFuncion);

//Tipo de dato Symbol
//Estas variables son utilizadas para definir variables unicas en temas mas avanzados de JS.
var simbolo = Symbol("Mi simbolo");
console.log(simbolo);

//Tipo clase es una function
class Persona {
  constructor(nombre, apellido) {
    this.nombre;
    this.apellido;
  }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo Undefined
var x;
console.log(x);
console.log(typeof x);
x = undefined;
console.log(x);

//null = ausencia de valor.
var y = null;
console.log(y);
console.log(typeof y);

/*undefined y null son datos parecidos, pero que se comportan de maneras distintas, ya que UNDEFINED es un tipo de dato que no
está definido aún, y NUL es un dato vacío, es decir que no contiene  ningun valor, nisiquiera 0*/

//Arreglos
var autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

var z = "";
console.log(z); //cadena vacía.
console.log(typeof z);
