function mayor(x,z,y){
    if(x>z && x>y){
        document.write("El mayor es el primer valor: " , x +" <br>")
    }
    if(z>x && z>y){
        document.write("El mayor es el segundo valor: " , z + "<br>")
    }
    if(y>x && y>z){
        document.write("El mayor es el tercer valor : " , y + "<br>")
    }
}

var a = parseInt(prompt("ingrese el primer valor: "));
var b = parseInt(prompt("Ingrese el segundo valor: "));
var c = parseInt(prompt("Ingrese el tercer valor: "));

mayor(a,b,c)