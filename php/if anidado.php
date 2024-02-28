<?php
// Pida a un usuario la edad y el género para que la computadora le indique si ya puede jubilarse. tome en cuenta que un Hombre se puede jubilar cuando tenga 60 años o más, en cambio, una mujer mayor se jubilará si tiene más de 54 años.
$edad = 50;
$genero = "M";
if ($genero == "H") {
    if ($edad >= 60) {
        echo "Usted puede jubilarse";
    } else {
        echo "Usted aun no puede jubilarse.";
    }
} elseif ($genero == "M") {
    if ($edad >= 54) {
        echo "Usted puede jubilarse";
    } else {
        echo "Usted aun no puede jubilarse.";
    }
}
?>