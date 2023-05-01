//Imprimir todos los números pares del rango de 1 a 10 utilizando ciclos y la palabre CONTINUE

//Ciclo For
for (let cont = 0; cont <= 10; cont++) {
  if (cont % 2 !== 0) {
    continue; //Se salta a la siguiente iteración del ciclo.
  }
  console.log(cont);
}

let contador = 0;
//Ciclo While
while (contador <= 10) {
  contador++;
  if (contador % 2 != 0) {
    continue;
  }
  console.log(contador);
}
contador = 0;

//Ciclo Do While
do {
  contador++;
  if (contador % 2 != 0) {
    continue;
  }
  console.log(contador);
} while (contador <= 10);

//Labels/etiquetas
/*Los labels o etiquetas sirven como un punto de referencia de los ciclos para regresar a determinado punto dentro del código,
aunque su uso no es recomendado, vale la pena ver como funciona para entender de que se trata*/

etiqueta:/*Declaramos la etiqueta con el nombre el queramos, el caracter ":" indica que esto es una etiqueta y 
declara que este es un punto de retorno. */
for (let index = 0; index <= 10; index++) {
  if (index % 2 !== 0) {
    continue etiqueta; //Continua hacia la etiqueta que le hayamos indicado que regrese.
  }
  console.log(index);
}
