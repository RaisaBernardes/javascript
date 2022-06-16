//---------Usando this--------

//O this dentro da function expression é dinâmico e refere-se ao objeto window
//Pra resolver isso a gente: 
//    1- Cria uma função "that" dentro da função e atribui o this a ela.
//    2- Onde teria "this" a gente substitui pelo "that"

(() => {
    function Person(){
        const that = this
        this.age = 0
        
        setInterval(function() {
            that.age = that.age + 1
            console.log('Qual this? ', that)
            console.log('Qual é a idade ?' + that.age)
            console.log('---------')
        }, 1000)
    }

    const p1 = new Person()
})();




//Usando arrowfunctions não temos esse problema, e não precisamos criar a função "that", 
//o this na arrow function funciona ok (é léxico, ou seja, respeita o escopo onde é criado, não executado.


(() => {
    function Person2(){
        this.age = 0
        
        setInterval(() => { //arrowfunction
            this.age = this.age + 1
            console.log('Qual this? ', this)
            console.log('Qual é a idade?' + this.age)
        }, 1000)
    }

    const p2 = new Person2()
})()
