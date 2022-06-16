
let vetorExemplo = [9, 7, 3, 'Gato', 1, 5, 'Cachorro'] //Em JS arrays são heterogênios.
let vetorNum = [1, 4, 6, 2, 9, 0]
console.log(vetorExemplo)





//-----------MÉTODOS QUE INSEREM ELEMENTOS DO ARRAY----------

//Insere um elemento de valor "1" no final do array
vetorExemplo.push(1)
console.log(vetorExemplo)

//Insere um elemento de valor 'teste-unshift' no início do array
vetorExemplo.unshift('teste-unshift')
console.log(vetorExemplo)







//-----------MÉTODOS QUE REMOVEM ELEMENTOS DO ARRAY----------

//Remove o último elemento do array
vetorExemplo.pop()

//Remove o primeiro elemento do array
vetorExemplo.shift()

//Removendo um ou mais elementos de posições específicas
vetorExemplo.splice(2, 1) //parâmetros: (a partir do índice 2; remova 1 elemento)
vetorExemplo.splice(2, 3) //tradução: (a partir do índice 2; remova 3 elementos)







//-----------MÉTODOS QUE RETORNAM UMA INFORMAÇÃO DO ARRAY----------

//Informa tamanho do array
console.log(`O vetor tem ${vetorExemplo.length} posições.`)


//Informa a posição do elemento 7. Se o elemento não existir, ele retorna -1
vetorExemplo.indexOf(7) 
console.log(`O elemento 7 está na ${vetorExemplo.indexOf(7)+1}ª posição`)







//------------------MÉTODOS VARIADOS--------------------

//Organiza os elementos em ordem crescente
vetorNum.sort() 
console.log(vetorNum)

//Organiza os elementos em ordem decrescente
//Se usar o reverse() sem o sort() antes, ele reverte a ordem que eu inserí. Não a ordem decrescente.
//Utilidade na vida real sem o sort(): organizar produtos dos mais novos para os mais antigos
vetorNum.reverse()
console.log(vetorNum)


//Junta todos os elementos de um array em uma string só
let vetorStrings = vetorNum.join()
console.log(vetorStrings)


//Concatenando vetores
let vetorzao=[]
vetorzao = vetorExemplo.concat(vetorNum)
console.log(vetorzao)



//----- FOR EACH: só funciona para arrays e objetos

for(var pos in vetorExemplo){ //lê-se: para cada posição dentro de "num"
    console.log(vetorExemplo[pos])
}


