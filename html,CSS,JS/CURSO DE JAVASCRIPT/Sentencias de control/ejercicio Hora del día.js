//EJERCICIO HORA DEL DIA
//Dependiendo de la hora del día, mostrar los siguientes mensajes:
//6am-11am - Buenos días
//12pm-18pm - Buenas tardes
//19pm-24pm - Buenas noches
//1am-5am - Zzzzzzz...

let hora = 24,
  mensaje;

console.log("Ingrese la hora del día.");
if (hora >= 6 && hora <= 11) {
  mensaje = "Buenos días.";
} else if (hora >= 12 && hora <= 18) {
  mensaje = "Buenas tardes.";
} else if (hora >= 19 && hora <= 24) {
  mensaje = "Buenas noches.";
} else if (hora >= 1 && hora <= 5) {
  mensaje = "Zzzzzzz...";
} else {
  console.log("Ingrese una hora válida (Utilizando formato de 24hrs.");
}
console.log(mensaje);