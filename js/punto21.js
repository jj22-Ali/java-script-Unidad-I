/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos. */


var sumaFinal = 0;

while(true){
    var x = parseInt(prompt("ingresar un numero: "))

    console.log("el numero ingresado es: ", x)

    if(isNaN(x)){
        break;
    }

    sumaFinal += x;
}

console.log("La suma total de los numeros ingresados es: ", sumaFinal);
