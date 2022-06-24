function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //fullyear pega o ano atual completo com os 4 dígitos. Ex.: "2022"
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    //como pegar o length do ano atual?

    if(fano.value.length < 4 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criando a imagem dinamicamente
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            
            if(idade >=0 && idade<=10){
                img.setAttribute('src', './imagens/bebe-m.png')
            } else if(idade < 21){
                img.setAttribute('src', './imagens/jovem-m.png')
            } else if(idade < 50){
                img.setAttribute('src', './imagens/adulto-m.png')
            } else {
                img.setAttribute('src', './imagens/idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            
            if(idade >=0 && idade<=10){
                img.setAttribute('src', './imagens/bebe-f.png')
            } else if(idade < 21){
                img.setAttribute('src', './imagens/jovem-f.png')
            } else if(idade < 50){
                img.setAttribute('src', './imagens/adulta-f.png')
            } else {
                img.setAttribute('src', './imagens/idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos!`
        res.appendChild(img) //faz aparecer a imagem depois da linha acima.   
    }
}