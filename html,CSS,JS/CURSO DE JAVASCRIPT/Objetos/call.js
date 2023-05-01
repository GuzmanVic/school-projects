//método Call
//Para ver un ejemplo de CALL, creamos dos objetos diferentes.
let persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};
//Al segundo objeto no le agregamos el metodo nombreCompleto
let persona2 = {
  nombre: "Carlos",
  apellido: "Lara",
};

console.log(persona1.nombreCompleto()); //Llamamos el método del objetp 1, nada nuevo aqui.
//Utilizamos el método call para imprimir los datos del segundo objeto, utilizando el metodo del objeto 1
console.log(persona1.nombreCompleto.call(persona2));
//De esta manera podemos imprimir los datos del segundo objeto, utilizando el método dentro del primero, sin necesidad de crear un metodo para el segundo objeto
//ahorrandonos asi una pequeña cantidad de codigo

//paso de argumentos a Call
let persona3 = {
  nombre: "Victor",
  apellido: "Guzmán",
  //Podemos agregar parametros al método, y modificarlos dependiendo del caso de cada persona que agreguemos mas adelante
  nombreCompleto: function (titulo,telefono) {
    return titulo+': '+this.nombre + " " + this.apellido+' '+telefono;
  },
};

//Agregamos un valor a los parametros, y estos se suman al valor de persona3, imprimiendo tanto los valores agregados, como los datos de persona3
console.log(persona1.nombreCompleto.call(persona3,'Ing.','831-241-0986'));
