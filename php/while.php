<?php
//1. Diseñe un programa que imprima lso números del 1 hasta el 20. (Incremento y deceremento)
$contador = 1;
while ($contador < 21) {
    echo $contador . "<br>";
    $contador++;
}
$contador--;
echo "<br>";
while ($contador >= 1) {
    echo $contador . "<br>";
    $contador--;
}
echo "<br>";
//2. Diseñe un programa que imprima la tabla de multiplicar de un número dado, desde el factor 1 hasta el 12. (incremento y decremento)
$numero = 5;
$contador = 1;
while ($contador <= 12) {
    echo "$numero x $contador= " . $numero * $contador . "<br>";
    $contador++;
}
echo "<br>";
$contador--;
while ($contador >= 1) {
    echo "$numero x $contador= $numero * $contador" . "<br>";
    $contador--;
}
?>