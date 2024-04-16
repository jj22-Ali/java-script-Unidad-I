function mayor(x,z){
    if(x>z){
        document.write("El mayor es el primer valor: " , x +" <br>")
    }else{
        document.write("El mayor es el segundo valor: " , z +" <br>")
    }
}

var a = parseInt(prompt("ingrese el primer valor: "));
var b = parseInt(prompt("Ingrese el segundo valor: "));

mayor(a,b)