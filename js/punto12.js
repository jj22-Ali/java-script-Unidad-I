
var frase = prompt("Ingrese una frase: ");
var contadorA = 0, contadorE = 0, contadorI = 0, contadorO=0, contadorU = 0;


frase = frase.toLowerCase();

for(i=0;i <= frase.length; i++){
    if(frase[i] == "a"){
        contadorA++;
    }
    if(frase[i] == "e"){
        contadorE++;
    }
    if(frase[i] == "i"){
        contadorI++;
    }
    if(frase[i] == "o"){
        contadorO++;
    }
    if(frase[i] == "u"){
        contadorU++;
    }
}

console.log("frase: " + frase)
console.log("La cantidad de A es de: " + contadorA)
console.log("La cantidad de E es de: " + contadorE)
console.log("La cantidad de I es de: " + contadorI)
console.log("La cantidad de O es de: " + contadorO)
console.log("La cantidad de U es de: " + contadorU)