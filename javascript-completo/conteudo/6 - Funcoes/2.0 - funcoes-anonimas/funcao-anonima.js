/*
CARACTERÍSTICAS:

- Uma função anônima é uma função sem nome
- Geralmente não está acessivel após a sua criação
- As arrowfunctions, function expressions, e IIFEs são funções anônimas! 

FINALIDADES:

- A finalidade de uma função anônima é exatamente a de permitir passá-la como se fosse um objeto qualquer, 
  que você pode atribuir a uma variável, independentemente de haver um nome para a função.
- Proteger variáveis contra mal uso, é uma das finalidades que acabou se encontrando para funções anônimas. Seria o equivalente a criar membros privados, 
  como é possível em várias linguagens.

QUANDO USAR?

- Nem sempre você precisa de um nome pra sua função. É simples assim! Se você vai usar a função recém definida 
  em um manipulador de eventos, ou num callback para Ajax, etc, não há necessidade de se colocar essa função numa variável/dar 
  um nome pra ela. Apenas crie a função e atribua-a onde for necessário.
*/

let show = function(){
    console.log('Essa é uma função anônima')
}
show();


//Costumamos usar funções anônimas como argumentos de outras funções. 
//Por exemplo:

setTimeout(function(){
    console.log('Execute depois de 1s')
}, 1000)



//Se você deseja criar uma função e executá-la imediatamente após a declaração, pode usar a função anônima como esta:
//Mais detalhe de IIFE mais adiante na "pasta 4"

(function(){
    console.log('IIFE')
})();

