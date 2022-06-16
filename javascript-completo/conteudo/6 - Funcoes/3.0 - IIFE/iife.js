/*
No contexto de desenvolvimento é necessário garantir que cada arquivo tenha o seu próprio escopo e assim possa existir 
nomes iguais de variaveis em arquivos diferentes no mesmo projeto.
Para isso, devemos: "Encapsular" a variavel/const/funcao numa função init(), pois assim, a variavel existirá apenas 
no escopo da função init.
*/

function init(){
    const getPerson = () => {
        return {name: "Raisa"}
    }
}
init();

/*
IIFE é uma função que se invoca no momento de sua criação e depois não pode ser chamada novamente para ser executada.
É muito útil para proteger de acontecer alguns erros no código, como declarar variáveis com o mesmo nome.
Passos: 
    1- Tirar o nome da função
    2- Envolve-la entre ( )
*/

(function (){
    const getPerson = () => {
        return {name: "Mirian"}
    }
})();


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
