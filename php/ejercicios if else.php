<!-- Calcular el total que una persona debe pagar en una llantera. 
Precio por llanta:
Menos de 5 llantas: $800
5 o más llantas: $700
Utilizar un operador ternario para resolver el ejercico-->
<?php
$llantasCompradas = 5;
$preciollantas = 0;
//If ternario
$preciollantas = ($llantasCompradas < 5) ? 800 : 700;
echo "El total de su compra es: " . $llantasCompradas * $preciollantas;
// Determinar si un alumno apruueba o reprueba un curso, sabiendo que abrobará si su promedio de tres calificaciones es mayor o igual a 70; reprueba en caso contrario
echo "<br>";
echo "<br>";
$matematicas = 65;
$español = 88;
$inglés = 98;
$promedio = ($matematicas + $español + $inglés) / 3;
if ($promedio >= 7) {
    echo "Estás aprobado";
} else {
    echo "Estás reprobado";
}
?>