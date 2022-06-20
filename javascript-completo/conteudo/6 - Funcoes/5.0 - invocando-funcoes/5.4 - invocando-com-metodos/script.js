//Um método é basicamente uma função que foi atribuída para a propriedade de um objeto. 
//Quando invocamos uma função dessa forma dizemos que invocamos uma função como um método.

let obj = {};

obj.sum = function(x, y){
    console.log(arguments);
    console.log(this) //Aqui o this é o próprio objeto obj
    
    return x + y;    
}
console.log(obj.sum(1,4));

//Vai imprimir
//{"0":1,"1":4}
//{ sum: [Function]}
//5