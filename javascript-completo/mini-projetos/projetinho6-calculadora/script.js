'use strict';

//1 - declarar variaveis
const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]') //pega todos os elementos que tem a palavra "tecla" no id e coloca num array

const inserirNumero = (evento) => display.textContent = evento.target.textContent

//2 - capturar o click de cada uma das telas
numeros.forEach(numero => numero.addEventListener('click',inserirNumero)) //pega um número e adiciona um click. Quando clicar ele vai chamar o método "inserirNumero()" 


//O for each varre todos os elementos de um array.








