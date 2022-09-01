/*
-----O que é?------
O forEach é um método para percorrer arrays (simples e complexos como objetos)
Permite executar uma função para cada item de um array. É retornado um valor para cada 
posição do array conforme a lógica implementada na função.

------Sintaxe------
array.forEach(funcao([valorAtual, índice, array]), argumentoThis)

----Parâmetros----
funcao() é a função a ser executada para cada elemento do array. Pode receber três parâmetros:

- valorAtual é o valor da posição atual sendo percorrida no array. Parâmetro obrigatório na declaração a função.
- índice é a posição do array que está sendo lida. Parâmetro opcional da função.
- array é o array a ser percorrido no forEach().Parâmetro opcional da função.
- argumentoThis valor opcional a ser usado como this no momento que executar a função de callback. Parâmetro opcional do forEach().

----Quando usar?---
Manipular o array e fazer algum calculo dentro dele. Usaremos dele quando precisarmos de um valor calculado.
*/


//Exemplo 1
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item) {
    total += item;
}

numeros.forEach(somar);
console.log(total);



//Exemplo 2
//A seguir demonstramos a mesma soma, mas exibindo o valor da somatória a cada posição do array e também o índice 
//sendo percorrido:

var numeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total2 = 0;

function somar2(item, indice) {
    total2 += item;
    console.log("[índice " + indice + "]= " + total2 + " -> ");
}
numeros2.forEach(somar2);




//Exemplo 3
//A seguir demonstramos como executar uma função para atualizar os valores declarados no array com os valores 
//obtidos com a somatória de cada posição anterior e em seguida imprimimos os itens desse array:
var numeros3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total3 = 0;

function somar3(item, indice) {
    total3 += item;
    numeros3[indice] = total3;
}

numeros3.forEach(somar3);
console.log(numeros3);




//Exemplo 4
//A seguir demonstramos como obter um novo array contendo apenas as marcas iniciadas com a letra “F”:
var marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
var marcasIniciadasComF = [];
var novoIndice = 0;

function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") != -1) {
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }
}

marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);



//Exemplo 5
//A seguir demonstramos como atualizar todas as strings de um array para que fiquem escritas em maiúsculo:
var nomes = ["Alberto", "Alex", "Sandro", "Roberta"];

function converterParaMaisculo(item, indice) {
    nomes[indice] = nomes[indice].toUpperCase();
}

nomes.forEach(converterParaMaisculo);
console.log(nomes);



//Exemplo 6
//No exemplo a seguir demonstramos como obter o maior nome a partir de array de nomes:

var nomes2 = ["Alberto", "Alex", "Sandro", "Ana Roberta"];
var tamanhoNome = 0;
var nome = "";

function maiorNome(item, indice) {
    if (nomes2[indice].length > tamanhoNome) {
        nome = nomes2[indice];
        tamanhoNome = nomes2[indice].length;
    }
}

nomes2.forEach(maiorNome);
console.log(nome);



//Exemplo 7
//Array de objetos
let produtos = [
    {
        nomeProduto: 'Celular',
        valorProduto: 1200.00,
        porcentagemDesconto: 0.20
    },
    {
        nomeProduto: 'Notebook',
        valorProduto: 2500.00,
        porcentagemDesconto: 0.30
    },
    {
        nomeProduto: 'Televisão',
        valorProduto: 3500.00,
        porcentagemDesconto: 0.35
    }
];

produtos.forEach((produtoAtual) => {
    let valorDoDesconto = produtoAtual.valorProduto *  produtoAtual.porcentagemDesconto
    let valorTotal = produtoAtual.valorProduto - valorDoDesconto
    produtoAtual.valorTotalProduto = valorTotal; //valorTotalProduto é o valor já com o desconto
    console.log(produtoAtual)
})