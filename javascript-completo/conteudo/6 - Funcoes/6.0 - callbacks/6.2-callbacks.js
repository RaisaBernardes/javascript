/*
-----O que é callback?-----

É um recurso utilizado pela linguagem, no qual uma função chama por outra para fazer uso do resultado processado 
por essa segunda chamada ou para executar uma ação específica.



-----Por que precisamos de funções de callback?-----

O JavaScript executa o código sequencialmente em uma ordem de cima para baixo. No entanto, existem alguns casos 
em que o código é executado (ou deve ser executado) depois que algo acontece e de modo não sequencial. 
Isso é chamado de programação assíncrona.

Callbacks garantem que uma função não seja executada antes que uma tarefa seja concluída, mas logo depois dessa
tarefa ser concluída. Elas nos ajudam a desenvolver código JavaScript assíncrono e evitam que tenhamos problemas e erros.
*/

//É muito comum fazer uma função de callback para lidar com um evento
const botao = document.querySelector('button')
const handleClick = () => {
    console.log("Botao foi clicado")
}
button.addEventListener("click", handleClick)




/*
Abaixo temos uma função com a responsabilidade de criar um botão na tela, no entanto, antes de inserir 
o botão na tela queremos fazer coisas personalizadas para cada botão. Para isso usamos o callback.
*/


function newButton(text, callback){

    const body = document.querySelector('body')
    const button = document.createElement('button')
    button.textContent = text

    callback(button) //executa a função callback que passamos como parâmetro na função newButton abaixo.
    
    body.insertAdjacentElement('beforeend', button)

    return button
}

//Dessa forma eu posso fazer o que eu quiser ANTES do momento da inserção desse botão na tela. 
newButton('Login', (buttonParam) => {
    console.log('Estamos dentro da função - Login')
    buttonParam.style.cssText = `font-size: 40px`;

    buttonParam.addEventListener("click", () => { //fazendo o evento de click
        console.log('Oi!')
    })
})

newButton('Signup', (buttonParam) => {
    console.log('Estamos dentro da função - Signup')
    buttonParam.style.cssText = `
    font-size: 80px;
    color: red;
    `;
})

