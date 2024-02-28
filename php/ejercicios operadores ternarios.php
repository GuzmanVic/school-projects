<!--
1. **Verificar Paridad:**
   Dada una variable `$numero`, imprime "Par" si el número es par y "Impar" si el número es impar.
-->
<?php
$numero = 102;
$resultado = ($numero % 2) ? "impar" : "par";
echo "El numero es: $resultado";
echo "<br>";

/* 2. **Calificación:**
Dadas tres variables `$nota1`, `$nota2` y `$nota3`, calcula el promedio y imprime "Aprobado" si el promedio es mayor o
igual a 60, de lo contrario, imprime "Reprobado".*/
$nota1 = 50;
$nota2 = 40;
$nota3 = 70;
$nota4 = 95;
$promedio = ($nota1 + $nota2 + $nota3 + $nota4) / 4;
$mensaje = ($promedio < 60) ? "Reprobado" : "Aprobado";
echo $mensaje;
echo "<br>";

// 3. **Determinar Mayor de Dos Números:**
// Dadas dos variables `$num1` y `$num2`, imprime el número mayor.
$num1 = 400;
$num2 = 3025;
$mayor = ($num1 > $num2) ? $num1 : $num2;
echo $mayor;
echo "<br>";

// 4. **Categorizar Edades:**
// Dada una variable `$edad`, imprime "Niño" si la edad es menor de 12 años, "Adolescente" si la edad está entre 12 y 18
// años, y "Adulto" si la edad es mayor de 18 años.
$edad = 18;
$persona = ($edad < 12) ? "Niño" : (($edad >= 12 && $edad < 18) ? "Adolescente" : "Adulto");
echo $persona;
echo "<br>";

// 5. **Tipo de Número:**
// Dada una variable `$numero`, imprime "Positivo" si el número es mayor que cero, "Negativo" si el número es menor que
// cero, y "Cero" si el número es igual a cero.
$numero = 40;
$resultado = ($numero >= 0) ? "Positivo" : "Negativo";
echo $resultado;
echo "<br>";

// 6. **Determinar Bisiesto:**
// Dado un año representado por la variable `$year`, imprime "Bisiesto" si el año es divisible por 4 y no divisible por
// 100, o si es divisible por 400. De lo contrario, imprime "No bisiesto".
$year = 2024;
$año = (($year % 4 == 0 && $year % 100 != 0) || $year % 400 == 0) ? "Bisiesto" : "No bisiesto";
echo $año;
echo "<br>";

// OPERADORES TERNARIOS ANIDADOS

// 1. **Clasificación de Números:**
//    Dada una variable `$numero`, imprime "Positivo" si el número es mayor que 0, "Negativo" si es menor que 0 y "Cero" si es igual a 0.
$numero = 0;
$num = ($numero > 0) ? "Positivo" : (($numero < 0) ? "Negativo" : "Cero");
echo $num;
echo "<br>";

// 2. **Clasificación de Edades Extendida:**
//    Dada una variable `$edad`, imprime "Niño" si la edad es menor de 12 años, "Adolescente" si la edad está entre 12 y 18 años (inclusive), "Adulto Joven" si la edad está entre 19 y 25 años (inclusive), y "Adulto" si la edad es mayor de 25 años.
$edad = 18;
$persona = ($edad < 12) ? "Niño" : (($edad >= 12 && $edad < 18) ? "Adolescente" : (($edad >= 18 && $edad <= 25) ? "Adulto joven" : "Adulto"));
echo $persona;
echo "<br>";

// 3. **Calificación Extendida:**
//    Dadas tres variables `$nota1`, `$nota2` y `$nota3`, calcula el promedio y clasifica la calificación en "Aprobado" si el promedio es mayor o igual a 70, "Supletorio" si está entre 60 y 69, y "Reprobado" si es menor de 60.
$nota1 = 84;
$nota2 = 100;
$nota3 = 90;

$promedio = ($nota1 + $nota2 + $nota3) / 3;
$respuesta = ($promedio >= 70) ? "Aprobado" : (($promedio >= 60 && $promedio <= 69) ? "Supletorio" : "Reprobado");
echo "Tu promedio es: $promedio, estás $respuesta";
echo "<br>";

// 4. **Categorización de Números:**
//    Dada una variable `$numero`, imprime "Par y Positivo" si el número es par y mayor que 0, "Impar y Positivo" si es impar y mayor que 0, "Cero" si es igual a 0, y "Negativo" si es menor que 0.
$numero = 0;
$num = ($numero % 2 == 0 && $numero > 0) ? "Par y Positivo" : (($numero % 2 != 0 && $numero > 0) ? "Impar y positivo" : (($numero == 0) ? "Cero" : "Negativo"));
echo $num;
echo "<br>";

// 5. **Calificación por Rango:**
//    Dada una variable `$puntaje`, imprime "Excelente" si el puntaje está entre 90 y 100, "Bueno" si está entre 80 y 89, "Regular" si está entre 70 y 79, y "Insuficiente" si es menor de 70.
$puntaje = 79;
if ($puntaje > 100) {
   $puntaje = 100;
}
$mensaje = ($puntaje >= 90 && $puntaje <= 100) ? "Excelente" : (($puntaje >= 80 && $puntaje <= 89) ? "Bueno" : (($puntaje >= 70 && $puntaje <= 79) ? "Regular" : "Insuficiente"));
echo $mensaje;
?>