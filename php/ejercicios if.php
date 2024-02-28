<?php
// Realizar un programa que reciba la edad de alguien y mostrar un mensaje en pantalla dependiendo de si es mayor o menor de 18
$edad = 150;
if ($edad >= 18) {
    echo "Eres mayor de edad";
} else {
    echo "Eres menor de edad";
}
echo"<br>";
echo"<br>";
// en un almacen se hace un 20% de descuento a los clientes cuya compra supere los $100 ¿cual será la cantidad que pagará una persona por su compra?
$totalCompra = 210;
if ($totalCompra >= 100) {
    $descuento = $totalCompra * 0.20;
    $totalCompra -= $descuento;
}
echo "El total de su compra es: $totalCompra";
?>