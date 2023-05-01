"""La compañia multinacional rappi solicita los dias de vacaciones a los que tiene derecho un trabajador,
tomando en cuenta las siguientes caracteristias.
1. Atencion al cliente clave 1
2. Logistica clave 2
3. Gerencia clave 3

Trabajadores con clave 1:
1 año de servicio reciben 6 días de vacaciones
2 a 6 años de servicio reciben 14 días de vacaciones.
A partir de 7 años de servicio, reciben 20 días de vacaciones.

TRABAJADORES CON CLAVE 2:
1 año de servicio, reciben 7 días de vacaciones
2  6 año de servicio, reciben 15 días de vacaciones
A partir de 7 años de servicio, reciben 22 días de vacaciones

TRABAJADORES CON CLAVE 3:
1 año de servicio, reciben 10 días de vacaciones
2 a 6 año de servicio, reciben 20 días de vacaciones
A partir de 7 años de servicio, reciben 30 días de vacaciones

El sistema debe solicitar: nombre, clave de Dpto y antigwedad del trabajador.
Deberá mostrar un mensaje en pantalla que contenga el nombre del trabajador y los días d vacaiones a los que tiene derecho.
"""
print("Sistema de vacaciones RAPPI.")
vacaciones = 0
salir = 1
while(salir != 0):
    nombre = input("Ingrese el nombre del trabajador:")
    dpto = int(input("Ingrese la clave del departamento del trabajador:"))
    ant = int(input("Ingrese la antiwedad del trabajador:"))
    if dpto == 1:
        if ant == 1:
            vacaciones = 6
        if ant >= 2 and ant <= 6:
            vacaciones = 14
        if ant >= 7:
            vacaciones = 20
    if dpto==2:
        if ant == 1:
            vacaciones = 7
        if ant >= 2 and ant <= 6:
            vacaciones = 15
        if ant >= 7:
            vacaciones = 22
    if dpto==3:
        if ant == 1:
            vacaciones = 10
        if ant >= 2 and ant <= 6:
            vacaciones = 20
        if ant >= 7:
            vacaciones = 30
    print("El empleado "+nombre+" tiene derecho a ",vacaciones," días de vacaciones.")
    salir=int(input("""¿Desea salir del sistema?
    0: Sí
    Cualquier otro número: No."""))
print("De nada, vuelva pronto.")
