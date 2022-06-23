'use strict';

//1 - declarar variaveis
const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]') //pega todos os elementos que tem a palavra "tecla" no id e coloca num array
const operadores = document.querySelectorAll('[id*=operador]')
let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => {
    
}

const calcular = () =>{
    if(operacaoPendente()){
        const numeroAtual = display.textContent
        if(operador == '+'){
            atualizarDisplay(numeroAnterior + numeroAtual)
        }
    }
}

//4
const atualizarDisplay = (texto) => {
    if(novoNumero){
        display.textContent = texto //substitui
        novoNumero = false;
    }else{
        display.textContent += texto; //concatena
    }
    
}


//3
const inserirNumero = (evento) => { 
    atualizarDisplay(evento.target.textContent) //nessa linha eu estou "capturando" o conteúdo dos botões
    //A propriedade target obtém o elemento no qual o evento ocorreu originalmente
}

//2 - capturar o click de cada uma das telas
//Tradução: para cada número adicione um "escutador" de click. Quando for clicado, execute "inserirNumero"
numeros.forEach(numero => numero.addEventListener('click', inserirNumero)) //pega um número e adiciona um click. Quando clicar ele vai chamar o método "inserirNumero()" 

const selecionarOperador = (evento) => {
    if(!novoNumero){
    novoNumero = true;
    operador = evento.target.textContent;
    numeroAnterior = display.textContent;
    }
}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador))








