//CALCULO DE LA ESTACIÓN DEL AÑO CON SWITCH.
let mes=3,estacion;
switch (mes) {
    case 1: case 2: case 12:
      estacion = "Invierno.";
      break;
    case 3: case 4: case 5:
      estacion = "Primavera.";
      break;
    case 6: case 7: case 8:
      estacion = "Verano.";
      break;
    case 9: case 10: case 11:
      estacion = "Otoño.";
    default:
      estacion = "Estación inválida.";
      break;
  }
  if (estacion=="Estación inválida.") {
      console.log("Ingrese un mes válido (1-12).");    
  } else {
      console.log("Estamos en : " + estacion);   
  }