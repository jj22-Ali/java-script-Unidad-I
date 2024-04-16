var x = parseInt(prompt("Ingresa cualquier numero: "));

document.write("<h1>Todos los divisores de " + x + "</h1><br>");

for(i = 1; i <= 20; i++){
    document.write("<ul>")
    if(i % x == 0){
        document.write("<li> "+ i + " es divisible por " + x)
    }
    document.write("</ul>")
}