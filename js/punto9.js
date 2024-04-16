var frase = prompt("Ingrese cualquier frase");
var contadorA = 0;

frase = frase.toLowerCase();

for(i = 0; i <= frase.length; i++){
    if(frase[i] == "a"){
        contadorA++;
    }
}

console.log("En la frase: " +  frase  + " la letra 'a' aparece: " + contadorA);