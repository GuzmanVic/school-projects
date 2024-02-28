<?php
// Se desea diseñar un programa que escriba los nombres de los dias de la semana en función del valor de ua variable DIA
$DIA = 7;
$diaSemana = "";
if ($DIA == 1) {
    $diaSemana = "Lunes";
} elseif ($DIA == 2) {
    $diaSemana = "Martes";
} elseif ($DIA == 3) {
    $diaSemana = "Miercoles";
} elseif ($DIA == 4) {
    $diaSemana = "Jueves";
} elseif ($DIA == 5) {
    $diaSemana = "Viernes";
} elseif ($DIA == 6) {
    $diaSemana = "Sábado";
} elseif ($DIA == 7) {
    $diaSemana = "Domingo";
} elseif ($DIA < 1 || $DIA > 7) {
    $diaSemana = "ninguno";
}
echo "Hoy es $diaSemana";
echo "<br>";
// En una fabrica de computadoras se planea ofreces a los clientes un descuento que dependerá del número de computadoras que compre. Si las computadoras son menos de cinco se les dará un 10% de descuento sobre el total de la compra; si el número de computadoras es mayor o igual a cunco pero menos de diez se le otorga un 20% de descuento; y si son 10 o más se les da un 40% de descuento. El precio de cada computadora es de $700.
$descuento = 0;
$computadoras = 4;
$precio = 700;
if ($computadoras < 5) {
    $descuento = 0.10;
} elseif ($computadoras >= 5 && $computadoras < 10) {
    $descuento = .20;
} elseif ($computadoras >= 10) {
    $descuento = .40;
}
$precio = $precio * $computadoras;
echo "Total de venta: $precio";
$precio -= $precio * $descuento;
echo "<br>";
echo "Descuento: ".($descuento*100)."%";
echo "<br>";
echo "Subtotal: $precio";

?>