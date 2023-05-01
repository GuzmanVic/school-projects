//Existen dos formas de declarar arreclos en JS
let guitarras=new Array('Gibson','Fender','Schechter'); //Primer forma(Ya no es tan utilizada)
const pianos=['Yamaha','Fibbie','Sound'];//Segunda forma (la más utilizada).

console.log(guitarras);
console.log(pianos);

//Imprimir datos del primer arreglo.
for (let index = 0; index < guitarras.length; index++) {
  console.log("Marca número: "+(index+1)+" "+guitarras[index])
}

//Datos del segundo arreglo
for (let index = 0; index < pianos.length; index++) {
  console.log("Marca número "+(index+1)+": "+pianos[index])
}

//Modificar datos de un arreglo
guitarras[1]='SmithFire';
console.log(guitarras);//Confirmamos que ya se modificó el dato.

//Formas de agregar valores a un arreglo.
guitarras.push('Fender','Vola');//Método push
console.log(guitarras);//Confirmamos que ya se agregaron los datos.

guitarras[guitarras.length] = 'Yamaha';//Agregar datos utilizando la función lenght
console.log(guitarras);//Confirmamos que ya se agregaron los datos.
//Podemos dejar espacios entre las posiciones del arreglo, saltandonos uno o mas espacios
guitarras[7]='Kaizer';//nos saltamos el espacio 6 y lo dejamos en blanco (Esto no es recomendable)
console.log(guitarras);//Confirmamos que ya se agregaron los datos.

//Comprobar si un objeto es un arreglo
console.log(Array.isArray(pianos));//Primer forma
console.log(guitarras instanceof Array);//Segunda forma