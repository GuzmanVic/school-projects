numero = int(input("Ingrese un número cualquiera:"))
N = ""
if numero % 2 == 0:
    N = "par"
else:
    N = "impar"
print("El número ", numero, " es "+N)
