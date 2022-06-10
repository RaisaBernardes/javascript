var numTxt = document.getElementById('inpNum')
var lista = document.querySelector('select#lista')
var res = document.getElementById('res')
var valores = []

//verificar se a entrada é um número válido
function isNumero(n){
    if(Number(numTxt.value) > 0 && Number(numTxt.value) <= 100){
        return true
    } else {
        return false
    }
}

//verificar se o número ja está na lista
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
   if(isNumero(Number(numTxt.value)) && !inLista(Number(numTxt.value), valores)){
        valores.push(Number(numTxt.value))
        var item = document.createElement('option')
        item.text = `O valor ${numTxt.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
   } else {
       window.alert('Número invalido. Tente novamente.')
   }

   numTxt.value = '' //Apaga o número escrito antes no campo "numText"
   numTxt.focus()    //Volta o cursor para o campo "NumTxt"
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Não foi possivel finalizar pois não existem valores na lista.')
    } else {
        var tot = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        
        for(var valor in valores){
            soma += valores[valor]
           if(valores[valor] > maior){
               maior = valores[valor]
           } else if(valores[valor] < menor){
                menor = valores[valor]
           }
        }

        var media = soma/tot

        res.innerHTML = ''
        res.innerHTML = `<p>Existe um total de ${tot} valores na lista.</p>`
        res.innerHTML += `<p>O maior elemento é ${maior}.</p>`
        res.innerHTML += `<p>O menor elemento é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos elementos é ${soma}.</p>`
        res.innerHTML += `<p>A media dos elementos é ${media}.</p>`
    }
}

