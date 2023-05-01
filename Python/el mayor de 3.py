print("Ingrese tres números cualesquiera.")
mayor = 0
cont = 1
while cont <= 3:
    n = int(input("Ingrese el número:"))
    if(n > mayor):
        mayor = n
    cont += 1
print("El mayor de los tres números es:", mayor)
