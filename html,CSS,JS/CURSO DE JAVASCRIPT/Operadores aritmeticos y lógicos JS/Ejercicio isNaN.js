//Funcion isNaN (Not a Number)
let numero="10x"
let miNumero=Number(numero);
console.log(miNumero);

if(isNaN(miNumero)){//Revisa si la variable es un número.
    console.log("No es un número");
}else{
    console.log("Es un número");
}