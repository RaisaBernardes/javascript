/*
Em JavaScript, funções são ditas "membros de primeira classe". Isso significa que você pode pode instanciá-las, 
atribuí-las a variáveis, ou mesmo criá-las dinamicamente em tempo de execução

Parâmetros X argumentos

 - Parâmetros referem-se às variáveis que são definidas na declaração de uma função.
 - Argumento é o valor passado para a função quando ela é invocada. Em outras palavras um argumento é atribuído para 
   um parâmetro quando uma função é invocada.

Função X Método

- Um método é basicamente uma função que foi atribuída para a propriedade de um objeto
*/



//-----Função com 1 parâmetro
function parImpar(n){
    if(n%2==0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
var resultado = parImpar(2)
console.log(resultado) //ou console.log(parImpar(2))




//-----Função com 2 parâmetros

function soma(n1, n2){
    return n1 + n2
}
console.log(soma(4, 5))





//-----Outra maneira..

function soma(n1=0, n2=0){ //inicializar os parâmetros
    return n1 + n2
}
console.log(soma(7)) //Aqui estamos somando 7 + 0
//0 que nós estamos dizendo para o Javascript aqui é:"Se o parâmetro a não for informado, assuma que o valor é 0".







//-----Função com inúmeros parâmetros (Rest parameters)

function myFunction(param1, ...moreParams){
    console.log(param1);
    console.log(moreParams);
}
myFunction(2,3,4,5,6);// vai imprimir a saida abaixo
// 2
//[3,4,5,6]


function myFuncTwo(...params){
    console.log(params)
}
myFuncTwo(1,2,3,4); // retorna [1,2,3,4]
/*
Uma vez que você define parâmetros com o rest operator, que é os … seguido do nome do parâmetro, todos 
os argumentos que você passar vão ser agrupados em um único parâmetro como um array.
O rest parameter sempre deve ser o último parâmetro definido na função.
*/


//-------Passando uma função para uma variável

var v = function(x){
    return x*2
}
console.log(5)



//--------Função fatorial

console.log('---FATORIAL---')

function fatorial(n){
    var fat = 1
    for(var i = n; i > 1; i--){
        fat *= i
    }
    return fat
}

//------Com recursividade

function fatorialRecursivo(n){
    if(n == 1){
        return 1
    } else {
        return n * fatorialRecursivo(n-1)
    }
}
console.log(fatorialRecursivo(5))

