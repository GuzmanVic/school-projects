let a = 4,
  b = 2,
  z;
// "+" = suma
z = a + b;
console.log("Resultado de la suma: " + z);
// "-" = resta
z = a - b;
console.log("Resultado de la resta: " + z);
// "/" = división
z = a / b;
console.log("Resultado de la división: " + z);
// "*" = Multiplicación
z = a * b;
console.log("Resultado de la multiplicación: " + z);
// "**" = Exponencial
z = a ** b;
console.log("Resultado del exponencial: " + z);
// "%" = Modulo (Residuo de una división)
z = a % b;
console.log("Residuo de la división: " + z);
// "++" = Incremento
//Pre-incremento (operadores antes de la variable)
console.log("Valor actual de a " + a);
z = ++a;
console.log("Valor de Z: " + z);
console.log("Incremento de a: " + a);
/*AL utilizar un preincremento primero se incrementa el valor de la variable y despues se asigna el valor a la variable que
estemos utilizando como almacenador de resultado*/

//Post-incremento (operadores des pues de la variable)
console.log("Valor actual de a " + a);
z = a++;
console.log("Valor de Z: " + z);
console.log("Incremento de a: " + a);
/*Al utilizar on Post-incremento, primero se asigna el valor a la variable que estemos usando como almacenador de resultado y hasta despues
se ejecuta el incremento respecto a la variable que estaremos incrementando.*/

/*También existe el pre-decremento y el post-decremento, asi que ambos conceptos pueden aplicarse perfectamente para decrementar
una variable, solo se deben cambiar el operador "++" por "--"*/

// "--" = Decremento
console.log("Valor actual de a " + a);
console.log("Valor actual de b " + b);
a--, b--;
console.log("Decremento de a: " + a + ". Decremento de b: " + b);

//Operadores de asignación.
// "="" asigna un valor a aguna variable. Ejemplo:
let e = 2;
// "+=" "-=" Operadores de asignación compuestos, estos operadores aumentan o decrementan el vaor de una variable e algun numero que queramos
//Ejemplo:
e += 5;
console.log(e);
e -= 3;
console.log(e);

//Operadores de comparación.
a = 3;
b = 2;
c = "3";

z = a == b; //Se revisa el valor sin importar el tipo.
console.log(z);

z = a === c; //Revisa si los valores son iguales, pero tambien los tipos, si los tipos de dato son distintos, retornara FALSE.
console.log(z);

z = 3 != 4; //Pregunta si ambos valores son distintos, de ser asi, retornara TRUE
console.log(z);
z = 3 !== "3"; //Se revisa si los tipos son distintos, y tambien los valores, si los valores son iguales PERO los tipos son distintos retornará FALSE
console.log(z);

//Operadores relacionales
z = a < b; //Revisa si el primer valor es menor que el segundo valor, de ser asi retorna TRUE, de lo contrario, retorna FALSE
console.log(z);
z = a > b; //Revisa si el primer valor es mayor que el segundo valor, de ser asi retorna TRUE, de no serlo, retorna FALSE
console.log(z);
z = a <= b; //Revisa si el primer valor es menor O IGUAL que el segundo valor, de ser asi retorna TRUE, de lo contrario, retorna FALSE
console.log(z);
z = a >= b; //Revisa si el primer valor es mayor O IGUAL que el segundo valor, de ser asi retorna TRUE, de no serlo, retorna FALSE
console.log(z);

//"&&" Operador AND
a = 5;
let min = 0,
  max = 10;
if (a >= min && a <= max) {
  //Revisa si la variable es mayor que el valor minimo Y TAMBIEN revisa si es menor que el valor máximo
  console.log("La variable a, se encuentra dentro del rango");
} else {
  console.log("La variable a, se encuentra fuera del rango");
}

// "||" Operador OR
/*un padre quiere asistir al juego de su hijo, pero solo puede asistir si está de vacaiones o si está en su día de descanso.
Programe la situación a continuación.*/
let vacaciones = false,
  diaDescanso = true;

if (vacaciones || diaDescanso) {
  console.log("El padre puede asistir al juego.");
} else {
  console.log("El padre está ocupado");
}

//Operador ternario.
/*Se le llama operador ternario por que se compone de tres partes, la evaluación(la operación que está entre parentesis), la parte 
verdadera y la parte falsa, la parte verdadera será el primer valor que se asigna despues del signo de "?" y la parte falsa es el valor
que se asigna despues de ":", de manera que nosotros podemos añadir el valor o cadena que queramos imprimir en la parte verdadera y 
en su parte falsa*/
//Formula del operador ternario: (Operación a ser evaluada)= parte verdadera : parte falsa

//EJEMPLO:
let resultado=(3>2)?"Es cierto":"Es incorrecto"; /*Revisa si 3 es mayor que dos, de ser verdadero, la variable RESULTADO retornará "Es cierto"
de no ser asi, retornará "Es incorrecto"*/
console.log(resultado);
