function carregar(){
    var titulo = document.getElementById("titulo")
    var msgHora = document.getElementById("hora")
    var imagem = document.getElementById("imagem")
    var data = new Date()
    var horaAtual = data.getHours()
    var minAtual= data.getMinutes()

   var horaAtual = 19
    msgHora.innerHTML = `Agora são ${horaAtual}:${minAtual}hs.`

    if(horaAtual>=0 && horaAtual<12) {
        titulo.innerHTML = 'Bom dia!'
        imagem.src = './imagens/manha.png'
        document.body.style.background = '#EFEFEF'  
        document.getElementById('titulo').style.color = '#34332D'
        document.getElementById('cr').style.color = '#34332D'
        msgHora.style.color = '#34332D'
   
    } else if (horaAtual>=12 && horaAtual<=18) {
        titulo.innerHTML = 'Boa tarde!'
        imagem.src = './imagens/tarde.png'
        document.body.style.background = '#BEA08A'
   
    } else {
        titulo.innerHTML = 'Boa noite!'
        imagem.src = './imagens/noite.png'
        document.body.style.background = '#152023'
    }  
}

