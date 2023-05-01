"""Calculadora
Realizar una calculadora que realice las operaciones básicas,
y que permita unicamente realizar operaciones con 2 números por operación.
Solo se permite utilizar un variable para el funcionamiento de todo elalgoritmo."""
numero = 0.0
print("""¿Que operación desea realizar?
1. Suma
2. Resta
3. Multiplicación
4. División
5. Exponente
6. Módulo o resto.""")
numero = float(input())
if numero < 7:
    if numero == 1:
        print("Suma.")
        numero = float(input("Ingrese el primer número."))
        numero += float(input("Ingrese el segundo número."))
    elif numero == 2:
        print("Resta.")
        numero = float(input("Ingrese el primer número"))
        numero -= float(input("Ingrese el segundo número."))
    elif numero == 3:
        print("Multiplicación.")
        numero = float(input("Ingrese el primer número"))
        numero *= float(input("Ingrese el segundo número."))
    elif numero == 4:
        print("División.")
        numero = float(input("Ingrese el primer número"))
        numero /= float(input("Ingrese el segundo número."))
    elif numero == 5:
        print("Exponente.")
        numero = float(input("Ingrese el primer número"))
        numero **= float(input("Ingrese el segundo número."))
    elif numero == 6:
        print("Modulo o resta.")
        numero = float(input("Ingrese el primer número"))
        numero %= float(input("Ingrese el segundo número."))
    print("El resultado es: ", numero)
