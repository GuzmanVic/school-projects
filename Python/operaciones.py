"""13 Ingresar 5 valores numéricos, el primer valor multiplicarlo por el segundo
valor y al resultado de esa operación sacarle la raíz cuadrada, también
realizar lo siguiente: multiplicar el tercer valor por el cuarto y el resultado
obtenido sumarle el valor obtenido de la raíz cuadrada de los primeros números y por ultimo
restarlo al quinto valor introducido."""
n1=int(input("Ingrese el primer valor "))
n2=int(input("Ingrese el segundo valor "))
n3=int(input("Ingrese el tercer valor "))
n4=int(input("Ingrese el cuarto valor "))
n5=int(input("Ingrese el quinto valor "))
n1=(n1*n2)**0.5
n3=((n3*n4)+n1)-n5
print("El resultado de la primer operación es: ",n1)
print("El resultado de la segunda operación es: ",n3)
