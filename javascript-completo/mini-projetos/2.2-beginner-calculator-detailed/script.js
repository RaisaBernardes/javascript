'use strict';

//1 - declarar variaveis
const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]') //pega todos os elementos que tem a palavra "tecla" no id e coloca num array
const operadores = document.querySelectorAll('[id*=operador]')
let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

//7
const calcular = () =>{
    if(operacaoPendente()){
        const numeroAtual = parseFloat(display.textContent.replace(',', '.'));
        novoNumero = true;
        const resultado = eval(`${numeroAnterior} ${operador} ${numeroAtual}`);
        atualizarDisplay(resultado);

        //----Substituindo código abaixo por "eval" acima

        // if(operador == '+'){
        //     atualizarDisplay(numeroAnterior + numeroAtual);
        // } else if(operador == "-"){
        //     atualizarDisplay(numeroAnterior - numeroAtual);
        // } else if(operador == "*"){
        //     atualizarDisplay(numeroAnterior * numeroAtual);
        // } else if(operador == "/"){
        //     atualizarDisplay(numeroAnterior / numeroAtual);
        // }
    }
}

//4
const atualizarDisplay = (texto) => {
    if(novoNumero){
        display.textContent = texto.toLocaleString('BR'); //substitui
        novoNumero = false;
    }else{
        display.textContent += texto.toLocaleString('BR'); //concatena
    }
}


//3
const inserirNumero = (evento) => { //vou receber um evento do addEventListener
    atualizarDisplay(evento.target.textContent) //nessa linha eu estou "capturando" o conteúdo dos botões
    //A propriedade target obtém o elemento no qual o evento ocorreu originalmente
}


//2 - capturar o click de cada uma das telas
//Tradução: para cada número adicione um "escutador" de click. Quando for clicado, execute "inserirNumero"
numeros.forEach(numero => numero.addEventListener('click', inserirNumero)) //pega um número e adiciona um click. Quando clicar ele vai chamar o método "inserirNumero()" 


//6
const selecionarOperador = (evento) => {
    if(!novoNumero){
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent.replace(',', '.'));
    }
}
//5
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador))


//9
const ativarIgual = () => {
    calcular();
    operador = undefined;
}
//8
document.getElementById('igual').addEventListener('click', ativarIgual)




//11
const limparDisplay = () => display.textContent = " "
//10
document.getElementById('limparDisplay').addEventListener('click', limparDisplay)



//13 - zerando a calculadora
const limparCalculo = () => {
    limparDisplay();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
}
//12
document.getElementById('limparCalculo').addEventListener('click', limparCalculo)




//15
const removerUltimoNumero = () => {
    display.textContent = display.textContent.slice(0, -1); //o método slice remove p último caracter de um array. Como o textContent retorna uma string, e uma string é um array de caracteres, nós podemos utiliza-lo
}
//14
document.getElementById('backSpace').addEventListener('click', removerUltimoNumero)




//17
const inverterSinal = () => {
    novoNumero = true;
    atualizarDisplay(display.textContent * -1)
}
//16
document.getElementById('inverterSinal').addEventListener('click', inverterSinal)






//20
const existeDecimal = () => display.textContent.indexOf(',') !== -1

//21
const existeValor = () => display.textContent.length > 0;

//19
const inserirDecimal = () => {
    if(!existeDecimal()){
        if(existeValor()){
            atualizarDisplay(',')
        }else{
            atualizarDisplay('0,')
        }
    }
}
//18
document.getElementById('decimal').addEventListener('click', inserirDecimal);



//Fazendo funcionar pelo teclado

const mapaTeclado = {
    0: 'tecla0',
    1: 'tecla1',
    2: 'tecla2',
    3: 'tecla3',
    4: 'tecla4',
    5: 'tecla5',
    6: 'tecla6',
    7: 'tecla7',
    8: 'tecla8',
    9: 'tecla9',
    '/': 'operadorDiv',
    '*': 'operadorMult',
    '-': 'operadorSub',
    '+': 'operadorSom',
    '=': 'igual',
    Enter: 'igual',
    Backspace: 'backSpace',
    c: 'limparDisplay',
    Escape: 'limparCalculo',
    ',': 'decimal',
};

const mapearTeclado = (evento) => {
    const tecla = evento.key; //evento.key captura a tecla que foi digitada no evento click
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1; //o método keys() extrai do objeto somente as chaves e retorna um array
    //se tiver no array, retorna true, se não, retorna false.
   
    if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click();
};

document.addEventListener('keydown', mapearTeclado);