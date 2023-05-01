let persona = {
  //Primer forma de definir un objeto y la más común.
  nombre: "victor",
  apellido: "Guzmán",
  edad: 23,
  email: "vguzmanloredo@gmail.com",
  //Método dentro de un objeto.
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombreCompleto()); //Mandamos llamar la función/método del objeto.

let persona2 = new Object(); //segunda forma de crear un objeto
//Propiedades del objeto:
persona2.nombre = "Yesenia";
persona2.direcion = "Nicolas Bravo 737";
persona2.telefono = "831-237-8799";

console.log(persona2.telefono);

//Acceder a las propiedades de los objetos en JS por medio de arrays

console.log(persona["nombre"]); //Accedemos al nombre poniendolo dentro de la posición en corchetes

//For in
for (propiedad in persona) {
  //Accedemos a todas las propiedades del objeto PERSONA
  console.log(propiedad); //Accedemos a los nombres de las propiedades
  console.log(persona[propiedad]); //Accedemos a los valores de las propiedades
}

//Agregar/Eliminar propiedades de un objeto
persona.sexo = "Masculino";
console.log(persona); //Comprobamos que se agregó la propiedad
delete persona.sexo; //Eliminamos tanto la propiedad como su valor.
console.log(persona); //Confirmamos que ya se haya eliminado

//Otras formas de imprimir objetos
console.log(persona.nombre + " " + persona.apellido); //método concatenar
//metodo object
let personaArray = Object.values(persona);
console.log(personaArray);
//método JSON
let personaString = JSON.stringify(persona);
console.log(personaString);

//Método Get y Set
let persona3 = {
  nombre: "Rafa",
  apellido: "Guzmán",
  idioma: "mx",
  get lang() {
    return this.idioma.toUpperCase(); //Recupera el String en mayusculas
  },
  //EL método SET nos sirve para modificar una propiedad previamente definida
  set lang(lang) {
    //Mandamos el parametro lang que recibirá la nueva modificación
    this.idioma = lang.toUpperCase(); //modificamos y convertimos el texto a mayusculas
  },
  //El método GET hace lo mismo que un FUNCTION pero es mas recomendable utilizar GET para simplificar código  a a hora de imprimir los datos
  get nombreC() {
    return this.nombre + " " + this.apellido;
  },
};
console.log(persona3.nombreC);
console.log(persona3.lang);
persona3.lang = "en"; //Hacemos referencia a la propiedad lang y mandamos llamar el método SET, modificando el nuevo valor "EN"
console.log(persona3.lang); //Confirmamos que se modifico el valor y se almacenó en mayusculas

//Constructor de objetos
//Coonstructor de objetos de tipo persona
function Persona(nombre, apellido, edad, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.email = email;
  this.nombreCompleto=function(){///Agregamos un métdo al constructor.
    return this.nombre+' '+this.apellido;
  }
}
let padre=new Persona('Rafael','Guzmán',46,'rafauto300@gmail.com');//Creamos otro objeto utilizando el constructor de personas previamente definido
console.log(padre);//Imprmimos el objeto "padre"
let madre=new Persona('Maria','Loredo',45,'rafauto300@gmail.com');//Repetimos el proeso con un nuevo objeto
console.log(madre);//Imprimimos el objeto "madre"

console.log(padre.nombreCompleto());//Imprimimos el nombre completo con el método del contructor
//Otras formas de crear objetos.
let miObjeto=new Object();
let miObjeto2={};

let miCadena1=new String('Hola');
let miCadena2='Hola';

let miNumero1=new Number(1);
let miNumero2=1;

let miBoolean=new Boolean(true);
letmiBoolean2=true;

let miArray=new Array();
let miArray2={};

let miFuncion=new Function();
let miFuncion2=new function(){};
//En los ejemplos anteriores se muestran dos formas distinas de crear diferentes tiopos de objetos.
/*Podemos utilizar cualquiera de ellas para crear un objeto ambas funcionan de la misma manera. 
la primera que se muestra en cada uno de los distintos ejemplos anteriores es la manera mas formal de declarar un objeto, sin embargo
es la menos recomendada ya que es menos practica, mientras que la segunda frma es una manera mas informal de declarar objetos
pero esta es mas recomendada, ya que es mas practica, pues nos permite ahorrar escritura de código*/
