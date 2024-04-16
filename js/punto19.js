var nota = parseInt(prompt("Ingrese la nota del alumno"));

if(nota >= 0 && nota <= 3){
    console.log("Nota: "+ nota + " Muy deficiente")
}else if(nota > 3  && nota <= 5){
    console.log("Nota: " + nota + " Insuficiente")
}else if(nota > 5  && nota <= 6){
    console.log("Nota: " + nota + " Suficiente")
}else if(nota > 6  && nota <= 7){
    console.log("Nota: " + nota + " Bien")
}else if(nota > 7  && nota <= 9){
    console.log("Nota: " + nota + " Notable")
}else if(nota > 9  && nota <= 10){
    console.log("Nota: " + nota + " Sobresaliente")
}