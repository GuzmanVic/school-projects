<?php
$nombre = "victor";
$pais = "mexico";
// concatenacion
echo "El nombre es: " . $nombre . "y su país es: " . $pais . " cola";
echo "<br>";
// Interpolacion simple
echo "El nombre es: $nombre y su país es:  $pais";
echo "<br>";
// Interpolacion con llaves
echo "El nombre es: {$nombre} y su país es:  {$pais}";
?>