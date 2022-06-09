function gerarTabuada(){
    var numeroTxt = document.getElementById('inpNumero')
    var tab = document.getElementById('seltab')

    if(numeroTxt.value.length != 0){
        var numero = Number(numeroTxt.value)
        tab.innerHTML = '' //limpando quando digitar um novo valor

        for (var i=1; i<=10; ++i){
            var item = document.createElement('option') //criando dinamicamente
            item.text = `${numero} x ${i} = ${numero*i}`
            item.value = `tab${i}` //essa linha serve para aber qual item foi selecionado. (útil apenas para outras linguagens como php)
            tab.appendChild(item)
        }
        
    } else {
        window.alert(`Campo vazio. Por favor, digite um número.`)
    }
}