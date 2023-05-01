//Paso por valor

//la variable a contiene un valor de tipo primitivo, ya que este no contiene metodos ni atributos, simplemente es un valor
let paso = 10;

function cambiarValor(a) {
  a = 20;
  console.log(arguments[0]);
}

cambiarValor(paso); //mandamos llamar el método y asignamos el valor de PASO al argumento de la función.
console.log(paso); //Sin embargo al volver a imprimir el valor de PASO este mantiene su valor inicial, ya que nunca cambiamos su valor
//si no que le asignamos el valor al argumento de la función antes mencionada, asi que esta asignacion no tiene por que cambiar los valores de PASO
//A este fenomeno se le conoce como PASO POR VALOR

//Paso por referencia

const persona = {
  //El contenido de PERSONA se le conoce como "Referencia"
  nombre: "Victor",
  apellido: "Guzman",
};

function cambiarValorObj(p1) {
  p1.nombre = "Yesin bebesin";//Apunta a la referencia del objeto para modificar su valor
  p1.apellido="Condesin";
}
console.log(persona);//el contenido de PERSONA no ha sido modificado por que aún no se ha hecho referencia a este dentro del metodo que se encarga de cambiar su valor
cambiarValorObj(persona);//Hacemos la referencia dentro del metodo, de esta manera el apuntador p1 logra acceder a las referencias de PERSONA
console.log(persona);//Finalmente los valores son cambiados
  //A esto se le conoce como paso por referencia.

