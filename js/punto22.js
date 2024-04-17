/*
Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento Nacional de Identidad).
El algoritmo para calcular la letra del dni es el siguiente :
● El número debe ser entre 0 y 99999999
● Debemos calcular el resto de la división entera entre el número y el número
23.
● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
● Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
 */

var letrasDni = "TRWAGMYFPDXBNJZSQVHLCKE"
var dni, resto, letraDni;

while(true){
    var dni = parseInt(prompt("ingresar un numero entre 0 y 99999999: "))

    console.log("el numero ingresado es: ", dni)

    resto = dni % 23;

    if(isNaN(dni)){
        break;
    }

    if(!isNaN(dni) && dni > 0 && dni <= 99999999){

        letraDni = letrasDni.charAt(resto);
        alert("La letra DNI " + dni + " es: " + letraDni);

    }else{
        alert("El valor ingresado no es un numero DNI valido, porfavor ingresar nuevamente");
    }
}
