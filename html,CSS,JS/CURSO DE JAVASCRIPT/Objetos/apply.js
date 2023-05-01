//Método Apply
/* El método funciona de la misma manera que "call" siempre y cuando no se pasen parametros por los metodos dento de los objetos,
sin embargo, si decidimos pasarle parametros al método dentro del objeto, entonces tendremos que llamar los datos de diferente manera
que con "Call"*/

//Para ver un ejemplo de Apply, creamos dos objetos diferentes.
let persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function (titulo, tel) {
    return titulo + ": " + this.nombre + " " + this.apellido + " " + tel;
  },
};
//Al segundo objeto no le agregamos el metodo nombreCompleto
let persona2 = {
  nombre: "Carlos",
  apellido: "Lara",
};

console.log(persona1.nombreCompleto("Licenciado", "54621845")); //Llamamos el método del objeto
//Utilizamos el método Apply para imprimir los datos del segundo objeto, utilizando el metodo del objeto 1
/*para poder agregarle datos a os parametros del metodo "nombreCompleto", debemos agregarlos por medio de un arreglo de 
datos para que todo funcione correctamente*/
let arreglo = ["Ingeniero", "8315468400"]; //Creamos el arreglo con los datos para titulo y telefono
//Utilizamos apply para traer los datos, y el arreglo previamente creado para insertar el tituolo y el telefono.
console.log(persona1.nombreCompleto.apply(persona2, arreglo));
/*Entones, concluimos que el funcionamiento de CALL y APPLY es el mismo, sin embargo se declaran de manera diferente, ya que 
si utilizaramos CALL, no es necesario crear un arreglo para agregarle datos a los parametros del método que estemos llmando
por lo que depende de cada uno la decisión de utilizar CALL o APPLY respectivamente.*/

