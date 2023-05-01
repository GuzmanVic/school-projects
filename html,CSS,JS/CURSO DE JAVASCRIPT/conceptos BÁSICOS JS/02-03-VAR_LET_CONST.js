//Literales=Valores que se le asignan a las variables.

//Literales numericas:
1
1.5
//Literales de cadena:
"Carlos"
//NOTA
/*En JS es posible declarar variables sin antes haber especificado una palabra reservada
al inicio de la declaración (Aunque esto no es una buena práctica)*/
nombre="Juan";
//NOTA
/*La palabra reservada VAR es utilizada para definir una variable en JS, sin embargo a día de hoy, esto es una práctica que ya no es
utilizada, a día de hoy existen 3 tipos de palabras reservadas para una variable, VAR, LET y CONST, pero como dije, el uso de VAR a día de hoy
es casi nulo.*/
//NOTA
/*Las declaraciones var tienen un ámbito global o un ámbito de función/local.
El ámbito es global cuando una variable var se declara fuera de una función. Esto significa que cualquier variable que se declare 
con var fuera de una función está disponible para su uso en toda la pantalla.*/
//NOTA
/*El principal problema con VAR, es que este puede ser REDECLARADO, por lo tanto esto puede dar problemas en codigos mas complejos
y donde a veces, se nos puede olvidar que ya hemos declarado esta variable antes, y podemos tener tropiezos con nuestros algoritmos */

//NOTA
//La palabra LET es utilizada para definir variables que estarán en constante cambio a lo largo de nuestro codigo
/*una variable declarada en un bloque con let  solo está disponible para su uso dentro de ese bloque.
Al igual que VAR, LET puede ser modificado, pero la principal mejora y diferencia entre ambos tipos de declaraciones es que
LET puede ser modificado pero NO puede ser REDECLARADO, por lo tanto esto facilita mucho los problemas que suele dar la palabra reservada VAR,
es por eso que hoy en dia, la palabra VAR ya no es tan utilizada, y ha llegado a ser reemplazada por LET.*/ 
let apellido;
apellido="Perez";
//NOTA
/*CONST será utilizado para definir variables que no pueden ser modificadas despues de haber sido definidas, por lo que, en teoria, estas
no son variables sino CONSTANTES*/
const apellido2="Gutierrez";
//La siguiente línea, nos marcará error, debido a que es una constante y NO puede ser modificada.
apellido2="Lara";
