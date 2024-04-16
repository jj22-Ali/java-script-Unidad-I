var x = parseInt(prompt("Ingrese un numero"))
var y = true;
if(x < 2){
    y = false;
}else{
    for(i=2;i < x; i++){
        if(x % i === 0){
            y = false;
            break;
        }
    }
}
if(y){
    alert("El numero " + x + " es primo")
}else{
    alert("El numero " + x + " NO es primo")
}