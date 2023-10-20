const prompt = require("prompt-sync")({ sigint: true });
let celsius = 0;
let kelvin = 0;
let fahrenheit = 0;

    
    
    do{
        celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
        if(!isNaN(celsius)){
            fahrenheit= (celsius * 9/5) +32;
            kelvin = celsius+273.15;
            console.log("La temperatura ingresada es: " + celsius +"°C");
            console.log("Su conversión a grados fahrenheit es: " +fahrenheit +"°F");
            console.log("Su conversión a kelvin es: " +kelvin +"K");

        } else {
            console.log("Debe ingresar un dato numérico");
        }

    }while (isNaN(celsius));