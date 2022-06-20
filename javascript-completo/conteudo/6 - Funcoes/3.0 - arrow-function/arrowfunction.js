/*

O QUE É?

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* É uma alternativa compacta a uma expressão de função tradicional, mas é limitada e não pode ser usada em todas as situações.


CARACTERÍSTICAS:

* Deve-se atribuir a arrowfunction à uma variavel ou à uma constante
* Diferença da sintaxe da função comum para a da arrowfunction:
 	- Atribui à uma variável
 	- Tira a palavra "function" e o nome da função
 	- Adiciona a a seta antes do corpo
* A arrowfunction é obrigatoriamente uma função anônima
* Dentro de funções ,é melhor usar a arrow function para ter mais previsibilidade. Ex.. O this na arrow function funciona ok (é léxico, ou seja, respeita o escopo onde é criado, não executado.
), mas numa function expression ele aponto para o objeto window.
*/



//--------------VARIAÇÕES


//--------------Sintaxe geral: 2 formas (com "{ }" e sem "{ }")


//Utilizando "{ }", obrigatoriamente deve-se usar a palavra "return".
const sum = (number1, number2) => {
    return number1 + number2
} 
console.log(sum(10, 10))


//Sem "{ }" não precisa usar a palavra "return"
const sum2 = (number1, number2) => number1 + number2
console.log(sum2(10, 10))


//Normalmente se usa as chaves quando existe uma lógica na função, e não apenas um retorno simples
//Ex.:
const growing = (age) => {
    if(age > 18){
        return 'Maior idade'
    } return 'Menor idade'   
}
console.log(growing(4))



//--------------Arrowfunction:Sem parâmetros

const community = () => 'Devs'
console.log(community())





//--------------Arrowfunction: Com apenas 1 parâmetro

// 1ª forma: com "( )"
const double = (number) => number*2
console.log(double(4))

// 2ª forma: sem "( )"
const double2 = number => number*2
console.log(double(8))





//--------------Arrow function: Com 2 ou mais parâmetros

//Com 2 ou mais parâmetros, obrigatoriamente deve-se usar parênteses

const num3 = (number1, number2, number3) => number1 + number2 + number3
console.log(num3(3,3,3))





//--------------Arrow function: Retornando um JSON sem parâmetros

//Com "{ }"
const getPerson = () => {
    return {name: "Bruno"}
}

//Sem "{ }"
const getPerson2 = () => ({name: "Bruno", eye: "blue"})




//---------Estrutra IIFE usando arrowfunction
// Passos: 
//  1- Envolvê-la entre ( )
//  2- Tirar a palavra "function" e o nome dela (se tiver)
//  3- Adicionar a arrow antes das { }
//  4- Adicionar no final de tudo o () 
(() => {
    const getPerson = () => {
        return {name: "Anderson"}
    }
})();
