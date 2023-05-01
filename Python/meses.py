mes=""
n=int(input("Ingrese un número del 1 al 12."))
if n==1:
    mes="Enero"
elif n==2:
    mes="Febrero"
elif n==3:
    mes="Marzo"
elif n==4:
    mes="Abril"
elif n==5:
    mes="Mayo"
elif n==6:
    mes="Junio"
elif n==7:
    mes="Julio"
elif n==8:
    mes="Agosto"
elif n==9:
    mes="Septiembre"
elif n==10:
    mes="Octubre"
elif n==11:
    mes="Noviembre"
elif n==12:
    mes="Diciembre"
else:
    print("Este número está fuera del rango, por favor ingrese unicamente números entre 1 y 12.")
print("El número ",n," representa el mes de "+mes)