var num = [9, 7, 3, 1, 5]

console.log(num)

num.sort() //arruma os elementos em ordem crescente

console.log(num)

num.push(1) //"força" a adição do valor 1 no array

console.log(num)

console.log(`O vetor tem ${num.length} posições.`)

num.indexOf(7) //Informa o índice do elemento 7 no array. Se o elemento não existir, ele retorna -1

console.log(`O elemento 7 está na ${num.indexOf(7)+1}ª posição`)


//----- FOR EACH: só funciona para arrays e objetos

for(var pos in num){ //lê-se: para cada posição dentro de "num"
    console.log(num[pos])
}



