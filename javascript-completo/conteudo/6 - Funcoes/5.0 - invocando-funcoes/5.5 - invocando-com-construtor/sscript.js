/*
Aqui refere-se a invocar a função como um construtor através de um operador new.
*/

function Person(){
    console.log(this);
}
const person1 = new Person();

//imprime
//Person{}

/*
Quando invocamos uma função como um constructor temos o seguinte comportamento:

Um novo objeto é criado é atribuído para o parâmetro this. Nesse caso podemos utilizar o this para inicializar outras propriedades.
Se um valor primitivo é retornado pela função ele é ignorado, mas se for um objeto, este objeto é retornado.
*/

function Person(){
    return true;
 }
 const person2 = new Person();
 console.log(person2)
 
 //imprime
 //Person{}
 



 function Person(){
     this.name = "Raisa";
     this.lastName = "Oliveira"
 }
 const person3 = new Person();
 console.log(person3)
 
 //imprime
 //Person{name:"Raisa", lastName:"Oliveira"}
 



function Person(){
        return {name:"Raisa"};
    }
const person4 = new Person();
console.log(person4)

 //imprime
 //{name:"Robisson"}