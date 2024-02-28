<?php
// 1. **Numeros Pares:**
//    - Utiliza un bucle para imprimir todos los números pares del 1 al 20. Utiliza `continue` para omitir los números impares.
$cont = 0;
while ($cont <= 20) {
    $cont++;
    if ($cont % 2 == 0) {
        echo $cont . "<br>";
    } else {
        continue;
    }
}
echo "<br>";
// 2. **Buscar Elemento:**
//    - Dado un arreglo de números, utiliza un bucle para buscar un número específico. Cuando encuentres el número, utiliza `break` para salir del bucle.
$numeros = [15, 7, 32, 45, 18, 10, 5, 22, 14, 29];
$numero = 15;
foreach ($numeros as $valor) {
    if ($valor === $numero) {
        echo $valor;
        break;
    }
}
echo "<br>";
echo "<br>";
// 3. **Números Primos:**
//    - Crea un bucle que imprima los números primos del 1 al 50. Utiliza `break` para salir del bucle después de imprimir los primeros 10 números primos.
$cont = 0;
;
for ($i = 2; $i < 51; $i++) {
    if (esPrimo($i)) {
        echo $i . "<br>";
        $cont++;
    }
    if ($cont == 10) {
        break;
    }
}

function esPrimo($numero)
{
    // Verifica si el número es menor que 2, en cuyo caso no es primo.
    if ($numero < 2) {
        return false;
    }

    // Utiliza un bucle for para iterar desde 2 hasta la raíz cuadrada del número.
    // No es necesario comprobar más allá de la raíz cuadrada para determinar si un número es primo.
    for ($i = 2; $i <= sqrt($numero); $i++) {
        // Verifica si el número es divisible por algún valor dentro del rango definido.
        if ($numero % $i == 0) {
            // Si es divisible, significa que no es primo, y se devuelve false.
            return false;
        }
    }

    // Si el bucle no encontró ningún divisor, el número es primo y se devuelve true.
    return true;
}
echo "<br>";
// 4. **Suma de Números:**
//    - Utiliza un bucle para sumar los números del 1 al 100. Cuando la suma alcance o supere 1000, utiliza `break` para salir del bucle.
$suma = 0;
for ($i = 1; $i < 101; $i++) {
    $suma += $i;
    if ($suma >= 1000) {
        echo $suma . "<br>";
        break;
    }
}
echo "<br>";
// 5. **Multiplos de 5:**
//    - Imprime los primeros 15 múltiplos de 5 utilizando un bucle. Utiliza `continue` para omitir cualquier múltiplo que sea también múltiplo de 3.
$numero = 5;
$cont = 0;
$multiplicador = 0;

while ($cont < 15) {
    $cont++;
    $multiplicador = $cont * $numero;

    if ($multiplicador % 3 === 0) {
        continue;
    }

    echo $multiplicador . "<br>";
}
?>