
//O que caracteriza um callback é passar para uma função como argumento uma outra função e executar ela durante o código.

//Essa função é executada após a reposta do código das outras funções
function exibir(num){
    console.log('A operação resultou em: ' + num) 
}


function somar(a, b, callback){
    let operacao = a + b
    callback(operacao)
}

function multiplicar(a, b, cb){ //É muito comum chamar callback de "cb" também
    let operacao = a * b
    cb(operacao)
}

somar(2, 2, exibir)

multiplicar(2, 3, exibir)