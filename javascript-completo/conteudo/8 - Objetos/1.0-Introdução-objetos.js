let pessoa = { 
    nome:'José',
    sexo: 'M',
    peso: 85.5,
    falar: function(){
        console.log('Olá!')
    },

    soma: function(a, b){
        return a + b
    }
}
console.log(pessoa.nome)

pessoa.falar()

let soma = pessoa.soma(2,3)

console.log(soma)



// - O this segue o mesmo raciocínio do java
// - Fora de escopos locais o this sempre se refere ao objeto Window
// - Em objetos o this vai se referir a instância e pode acessar suas propriedades
