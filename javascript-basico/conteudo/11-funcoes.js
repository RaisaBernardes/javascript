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

//------COM RECURSIVIDADE

function fatorialRecursivo(n){
    if(n == 1){
        return 1
    } else {
        return n * fatorialRecursivo(n-1)
    }
}

console.log(fatorialRecursivo(5))

