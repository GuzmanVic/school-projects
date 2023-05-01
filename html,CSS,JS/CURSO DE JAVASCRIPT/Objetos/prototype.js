function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    ///Agregamos un métdo al constructor.
    return this.nombre + " " + this.apellido;
  };
}
let padre=new Persona('Rafael','Guzmán','rafauto300@gmail.com');
let madre=new Persona('Maria','Loredo','rafauto300@gmail.com');
console.log(madre);
console.log(padre);
console.log(padre.nombreCompleto());


padre.tel='8312345'//Podemos agregar nuevas propiedades a un objeto
console.log(padre.tel);//Comprobando que se haya agregado la nueva propiedad
//Sin embargo, lo que se hizo anteriormente solo agregaria la propiedad al objeto padre, omitiendo todos los demas objetos de tipo "Persona"
//Si quisieramos imprimir la propiedad "tel" desde el objeto "madre", esto NO funcionaría, pues no se agregó dicha propiedad a ese objeto

//Para resolver lo anterior mencionado, podemos hacer us de la funcion "protptype", a continuación un ejemplo:

Persona.prototype.tel='4452135';//Agregamos la propiedad junto con su valor A TODOS os objetos de tipo persona.
console.log(madre.tel);//Confirmamos que la propiedad se agregó automaticamente al objeto madre
console.log(padre.tel);//El objeto padre se queda con la propiedad que añadimos anteriormente, ya que ya había sido definida.
madre.tel='8312418799';/*Podemos cambiar el valor de madre tambien, si asi lo desearamos, sin embargo, a todos los demas objetos 
que no sean modificados, tendrán el mismo valor*/
console.log(madre.tel);