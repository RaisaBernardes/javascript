//FUNCTION DECLARATION 
//Também chamada de "function statement"
//É hoisted (disponivel em parse-time), ou seja, ela está sempre disponível e eu posso chama-la nas linhas anteriores
//a ela.

console.log(doSomething);
doSomething();

function doSomething(){
    console.log("Declare something")
}

//FUNCTION EXPRESSION
//Com a function expression a variável é hoisted, mas não a função. Logo, se chamarmos a variavel nas linhas acima, 
//ocorrerá um erro informando que "something" não é uma função.
//A function expression está disponivel apenas em run-time, no momento em que a linha for corrida pelo código.

console.log(something)
something();

var something = function() {
    console.log("Express something")
};


/*
QUANDO USAR QUAL?
Na maioria dos casos não faz muita diferênça qual usar. Porém há casos onde a Function Expression é muito útil e 
faz algo que a Function Declaration não permite fazer.
Exemplo:
    var id = document.geElementById;
Ou seja estamos a atribuir uma função à uma variável. Isto poupa espaço no código futuro e não seria possível via 
Function Declaration.
*/