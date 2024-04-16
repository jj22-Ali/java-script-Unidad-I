var x = parseInt(prompt("Ingresa cualquier numero: "));
var z = parseInt(prompt("Ingresa otro numero: "));

document.write("<h1>Todos los divisores de " + x + " y " + z +" </h1><br>");

for(i = 1; i <= 100; i++){
    document.write("<ul>")
    if(i % x == 0 && i % z == 0){
        document.write("<li> "+ i + " es divisible por " + x + " y " + z)
    }
    document.write("</ul>")
}