//Aqui vamos invocar uma função pelo nome que ela foi definida seguida por ()
//Caso você esteja em strict mode invocar uma função como função vai fazer com que o this seja undefined.

"use strict"

function sum(x, Y){
    console.log(arguments);
    console.log(this)
    
    return X + y;    
}
console.log(sum(1, 4));

// vai imprimir
//{"0":1,"1":4}
//undefined
//5