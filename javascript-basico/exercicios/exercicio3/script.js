function contar(){
    var inicioTxt = document.getElementById('inpInicio')
    var fimTxt = document.getElementById('inpFim')
    var intervaloTxt = document.getElementById('inpIntervalo')
    var resTxt = document.querySelector('div#res')

    if(inicioTxt.value.length != 0 || fimTxt.value.length != 0 || intervaloTxt.value.length != 0){
        inicio = Number(inicioTxt.value)
        fim = Number(fimTxt.value)
        intervalo = Number(intervaloTxt.value)

        if(intervalo > 0){
           
            if(inicio < fim){
                //contagem crescente
                for (var i=inicio; i<=fim; i+=intervalo){
                    res.innerHTML += `${i} \u{1F449} `
                }
            } else {
                //contagem decrescente
                for (var i=inicio; i>=fim; i-=intervalo){
                    res.innerHTML += `${i} \u{1F449} `
                }
            }
            res.innerHTML += `\u{1F3C1}`  
        } else {
            window.alert('Dado referente ao campo de intervalo inválido. Tente novamente.')
        }
    } else {
        window.alert('[ERRO], Verifique os dados e tente novamente')  
    } 
    
}

// emojis -->> https://unicode.org/emoji/charts/full-emoji-list.html