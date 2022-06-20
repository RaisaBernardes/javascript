// const button = document.querySelector('button')

// //É muito comum fazer uma função de callback para lidar com um evento
// const handleClick = () => {
//     console.log("Button foi clicado")
// }
// button.addEventListener("click", handleClick)


//----------------
/*
Abaixo temos uma função de criar um botão na tela, no entanto, antes de inserir o botão na tela queremos fazer coisas personalizadas
para cada botão
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

