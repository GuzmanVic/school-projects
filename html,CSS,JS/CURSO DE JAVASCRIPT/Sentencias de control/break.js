//Imprimir solamente el primer número par que se encuentra en el rango de 1 a 10 utilizando ciclos y la palabra BREAK

//Ciclo For
for (let cont = 0; cont < cont <= 10; cont++) {
  console.log(cont);
  if (cont % 2 == 0) {
    console.log(cont);
    break;
  }
}
console.log("Fin del ciclo FOR");

//Ciclo While
let contador=0;
while (contador <= 10) {
  contador++;
  if (contador % 2 == 0) {
    console.log(contador);
    break;
  }
}
contador = 0;
//Ciclo Do While
do {
  contador++;
  if (contador % 2 == 0) {
    console.log(contador);
    break;
  }
} while (contador <= 10);