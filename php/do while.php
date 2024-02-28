<?php
//1. Diseñe un programa que imprima lso números del 1 hasta el 20. (Incremento y deceremento)
$contador = 1;
do {
    echo $contador . "<br>";
    $contador++;
} while ($contador < 21);
echo "<br>";
$contador--;
do {
    echo $contador . "<br>";
    $contador--;
} while ($contador >= 1);
echo "<br>";
//2. Diseñe un programa que imprima la tabla de multiplicar de un número dado, desde el factor 1 hasta el 12. (incremento y decremento)
$numero = 5;
$contador = 1;
do {
    echo "$numero x $contador= " . $numero * $contador . "<br>";
    $contador++;
} while ($contador <= 12);
echo "<br>";
$contador--;
do {
    echo "$numero x $contador= " . $numero * $contador . "<br>";
    $contador--;
} while ($contador >= 1);
?>