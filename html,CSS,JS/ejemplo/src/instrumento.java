package ejemplo;
public class instrumento {
    String nombre,color;
    int antiwedad,precio;
    
    public instrumento(){
        nombre = "";
        color = "";
        precio = 0;
        antiwedad = 0;
    }
    public instrumento(String nombre, String color, int precio, int antiwedad){
        setNombre(nombre);
        setColor(color);
        setPrecio(precio);
        setAntiwedad(antiwedad);
    }
    public String getNombre(){
        return nombre;
    }
    public void setNombre(String nombre){
        this.nombre = nombre;
    }
    public int getPrecio(){
        return precio;
    }
    public void setPrecio(int precio){
        this.precio = precio;
    }
    public String getColor(){
        return color;
    }
    public void setColor(String color){
        this.color = color;
    }
    public int getAntiwedad(){
        return antiwedad;
    }
    public void setAntiwedad(int antiwedad){
        this.antiwedad = antiwedad;
    }
}