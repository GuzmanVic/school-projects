package ejemplo;

import java.util.ArrayList;
import java.util.Scanner;
public class App {

    static Scanner sc = new Scanner(System.in);
    static ArrayList<auto> coches = new ArrayList<>();
    
    public static void main(String[] args) {
    	menu();
    } 
    
    public static void menu() {
        System.out.println("Ingrese una opción.");
        System.out.println("1.- Ingresar coches.");
        System.out.println("2.- Mostrar coches.");
        System.out.println("3.- Mostrar por marca.");
        System.out.println("4.- Mostrar ordenados de menor a mayor en KM.");
        int a = sc.nextInt();
        switch(a) {
        case 1:
            leerCoches();
        	break;
        case 2:
        	mostrarCoches();	
        	break;
        case 3:
            mostrarPorMarca();
            break;
        case 4: 
            mostrarOrdenadosPorKm();
        	break;
        }
    }
    public static void leerCoches(){
 
        String matricula;
        String marca;
        String modelo;
        int Km;
  
        auto aux;
        int i, N;
  
        do {
            System.out.print("¿Cuántos coches se van a ingresar?");
            N = sc.nextInt();
        } while (N < 0);
        sc.nextLine(); 

        for (i = 1; i <= N; i++) {

        	System.out.println("Coche " + i);
            System.out.print("Matrícula: ");
            matricula = sc.next();          
            System.out.print("Marca: ");
            marca = sc.next();
            System.out.print("Modelo: ");
            modelo = sc.next();
            System.out.print("Número de Kilómetros: ");
            Km = sc.nextInt();
            System.out.println("-------------------------------");

            aux = new auto(); 
            aux.setMatricula(matricula);
            aux.setMarca(marca);
            aux.setModelo(modelo);
            aux.setKm(Km);
          coches.add(aux);
        }
        menu();
    }
    
    public static void mostrarCoches(){      
        for(int i = 0; i< coches.size(); i++) {
            System.out.println(coches.get(i));
        	System.out.println("-------------------------------");
        }
        menu();
        
    }
    public static void mostrarPorMarca(){
        String marca;
        System.out.print("Introduce marca: ");
        marca = sc.next();
        System.out.println("Coches de la marca " + marca);
        for(int i = 0; i < coches.size(); i++){
            if(coches.get(i).getMarca().equalsIgnoreCase(marca)) {
                System.out.println(coches.get(i));
            	System.out.println("-------------------------------");
            }
        }
    menu();
    }
    public static void mostrarOrdenadosPorKm(){
        int i, j;
        auto aux;
        for(i = 0; i < coches.size()-1; i++)
            for(j=0; j < coches.size()-i-1; j++)
                if(coches.get(j+1).getKm() < coches.get(j).getKm()){
                    aux = coches.get(j+1);
                    coches.set(j+1, coches.get(j));
                    coches.set(j, aux);                
                }
        mostrarCoches();

        menu();
        }
    }
