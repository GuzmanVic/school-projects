<?php

// 1. **Sumar elementos de un arreglo:**
//    Dado un arreglo de números, utiliza un bucle `foreach` para sumar todos los elementos e imprimir el resultado.
$numeros = [21, 11, 32, 43, 54];
$suma = 0;
foreach ($numeros as $numero) {
    $suma += $numero;
}
echo "La suma de todos los números es: $suma";
// 2. **Imprimir elementos con índices asociativos:**
//    Crea un arreglo asociativo con nombres de países y sus capitales. Utiliza un bucle `foreach` para imprimir cada país y su capital.
$paises = ["México" => "CDMX", "USA" => "Washington DC", "España" => "Barcelona", "Ecuador" => "Quito"];
echo "<br>";
foreach ($paises as $key => $pais) {
    echo "La capital de " . $key . " es " . $pais . "<br>";
}
echo "<br>";
// 3. **Filtrar elementos de un arreglo:**
//    Dado un arreglo de números, utiliza un bucle `foreach` para imprimir solo los números mayores que 10.
$numeros = [2, 8, 5, 12, 7, 3, 10, 6, 15, 4];
foreach ($numeros as $numero) {
    if ($numero > 10) {
        echo $numero . "<br>";
    }
}
echo "<br>";
// 4. **Calcular el promedio de calificaciones:**
//    Crea un arreglo con calificaciones y utiliza un bucle `foreach` para calcular y imprimir el promedio.
$calificaciones = [80, 92, 75, 88, 95, 60, 78, 87, 93, 70, 85, 89, 64, 91, 82];
$promedio = 0;
foreach ($calificaciones as $calificacion) {
    $promedio += $calificacion;
}
$promedio = $promedio / count($calificaciones);
echo "El promedio es: $promedio";
echo "<br>";
echo "<br>";
// 5. **Eliminar elementos duplicados:**
//    Dado un arreglo que contiene elementos duplicados, utiliza un bucle `foreach` para crear un nuevo arreglo sin duplicados.
$elementosDuplicados = [3, 7, 5, 3, 8, 7, 2, 5];
$arreglo = [];
echo "Arreglo sin duplicados:";
foreach ($elementosDuplicados as $elemento) {
    echo $elemento . ", ";
    if (!in_array($elemento, $arreglo)) {
        $arreglo[] = $elemento;
    }
}
echo "<br>";
echo "Arreglo sin duplicados:";
foreach ($arreglo as $value) {
    echo $value . ", ";
}
?>