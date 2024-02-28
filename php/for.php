<?php
//1. Diseñe un programa que imprima lso números del 1 hasta el 20. (Incremento y deceremento)
for ($i = 1; $i < 21; $i++) {
    echo $i . "<br>";
}
echo "<br>";
for ($i = 20; $i > 0; $i--) {
    echo $i . "<br>";
}
echo "<br>";
//2. Diseñe un programa que imprima la tabla de multiplicar de un número dado, desde el factor 1 hasta el 12. (incremento y decremento)
for ($i = 1; $i < 13; $i++) {
    echo "2x$i=" . $i * 2 . "<br>";
}
echo "<br>";
for ($i = 12; $i > 0; $i--) {
    echo "2x$i=" . $i * 2 . "<br>";
}
?>