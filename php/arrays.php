<?php
// <!-- arrays escalares (basicos) -->
$nombres = ["carlos", "victor", "yesi", "luz"];
// Arrays asociativos
$tutor = ["nombre" => "Carlos", "apellido" => "trejo", "edad" => 12];
echo $tutor["edad"];
echo "<br>";
$tutor["edad"] = 10;
echo $tutor["edad"];
// Imprimir cada elemento del array asociativo

echo "<br>";
foreach ($tutor as $clave => $valor) {
    echo "Clave: $clave, Valor: $valor <br>";
}

// Arrays multidimensionales
$tutor2 = ["nombre" => "lupe", "apellido" => "loredo", "edad" => 80, "cursos" => ["PHP", "Phyton", "CSS"]];
//Imprimir el array incrustado con un indice
echo $tutor2['cursos'][2];
echo "<br>";
// Imprimir todo el array incrustado
for ($i = 0; $i < count($tutor2['cursos']); $i++) {
    echo $tutor2['cursos'][$i] . " ";
}
echo "<br>";
//Imprimir todo el array multidimensional
print_r($tutor2);//Imprime la estructura del array en pantalla
echo "<br>";
//Imprime los elementos del array en pantalla
foreach ($tutor2 as $clave => $valor) {
    if (is_array($valor)) {
        // Si el valor es un array, imprime sus elementos
        echo "$clave: ";
        foreach ($valor as $elemento) {
            echo "$elemento ";
        }
        echo "<br>";
    } else {
        // Si el valor no es un array, imprímelo directamente
        echo "$clave: $valor <br>";
    }
}

?>