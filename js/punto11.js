var frase = prompt("Ingrese una frase: ");
var contadorVocal = 0;

frase = frase.toLowerCase();

for(i=0;i <= frase.length; i++){
    if(frase[i] == "a" || frase[i] == "e" || frase[i] == "i"|| frase[i] == "o" || frase[i] == "u"){
        contadorVocal++;
    }
}

console.log("La frase: " + frase + " tiene una cantidad de :" + contadorVocal + " vocales")


