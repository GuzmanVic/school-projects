print("Calculadora minimalista.")
resultado=0
cont=1
terminar=False
while(cont<=6):
    print("""¿Que operación desea realizar?
    1. Suma
    2. Resta
    3. Multiplicación.
    4. División.
    5. Exponentes.
    6. Modulo.""")
    op = int(input())
    if op < 5:
         num1=int(input("Ingrese el primer valor "))
         num2=int(input("Ingrese el segundo valor "))
    if op == 1:
        resultado=num1+num2
    elif op == 2:
        resultado = num1-num2
    elif op == 3:
        resultado = num1*num2
    elif op == 4:
        resultado = num1//num2
    elif op == 5:
        num1 = int(input("Ingrese el número base "))
        num2 = int(input("Ingrese el exponente "))
        resultado = num1**num2
    elif op == 6:
        resultado = num1%num2
    else:
        print("Por favor, seleccione una opción válida.")
        cont-=1
    cont+=1
    print("El resultado es: ",resultado,"""
    

""")
        
    
print("Adiós, mocosos")
    
