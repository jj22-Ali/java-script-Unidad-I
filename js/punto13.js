var x = parseInt(prompt("Ingresa cualquier numero: "));

if(x % 2 == 0){
    console.log("El numero " + x + " es divisible en 2")
}else{
    if(x % 3 == 0){
        console.log("El numero " + x + " es divisible en 3")
    }else{
        if(x % 5 == 0){
            console.log("El numero " + x + " es divisible en 5")
        }else{
            if(x % 7 == 0){
                console.log("El numero " + x + " es divisible en 7")
            }
        }
    }
}