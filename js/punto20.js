//Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión//

var cadenaTexto = "";

while(true){
    var texto = prompt("ingresar texto: ")


    if( texto === null){
        break;
    }

    cadenaTexto += texto + " - ";
    

}

if(cadenaTexto.length > 0){
    document.write("Texto conectado: ", cadenaTexto)
}else{
    document.write("Usted no ingreso nada.")
}
