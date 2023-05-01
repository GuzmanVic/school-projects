var nombre = "Juan";
var apellido = "Perez";

//Formas de concatenar dos o mas cadenas:

//1
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

//2
nombre = nombre + " " + apellido;
console.log(nombre);

//3
var nombreCompleto2="Victor"+' '+'Guzmán'
console.log(nombreCompleto2);
//4
/*Al concatenarse una cadena con un valor numerico, JS convierte automaticamente los valores
 númericos a una cadena para concatenar ambos valores de manera correcta*/
var x = nombre + 219;
console.log(x);
//También pueden concatenarse cadenas de texto a una operación aritmetica, como se muestra a continuación:
x=nombre+(2+4);
console.log(x);
//Tambien puede hacerse de manera inversa:
x=2+4+nombre;
console.log(x);
/*Contexto STRING/CADENA: si JS encuentra en el lado izquierdo una cadena, todo lo que se encuentre a continuación será tomado como una cadena
a menos que se encuentre con un parentesis, en ese caso, resolvera primero todo lo del parentesis para despues de ser resuelto convertirlo a
una cadena y concatenarlo con el lado izquierdo.
en cambio, si primero se encuentra con valores numericos, realizará las operacines (en caso de haberlas) y si mas adelante se encuentra
con valores de cadena, entonces convertirá los valores numericos en cadena, y los concatenara a la cadena de las derecha.*/