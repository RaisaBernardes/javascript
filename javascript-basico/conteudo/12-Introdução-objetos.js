let amigo = { nome:'José',
sexo: 'M',
peso: 85.5,

engordar(p=0){
    console.log('Engordou')
    this.peso +=p
}}

console.log(amigo)



// - O this segue o mesmo raciocínio do java
// - Fora de escopos locais o this sempre se refere ao objeto Window
// - Em objetos o this vai se referir a instância e pode acessar suas propriedades
