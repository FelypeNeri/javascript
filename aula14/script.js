function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verificar os dados e tentar novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './imagens/bebe-mas.jpg')
            }else if (idade < 21) {
                img.setAttribute('src', './imagens/adolescente-mas.jpg')
            }else if (idade < 50) {
                img.setAttribute('src', './imagens/adulto-mas.jpg')
            }else {
                img.setAttribute('src', './imagens/idoso-mas.jpg')
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './imagens/bebe-fem.jpg')
            }else if (idade < 21) {
                img.setAttribute('src', './imagens/adolescente-fem.jpg')
            }else if (idade < 50) {
                img.setAttribute('src', './imagens/adulto-fem.jpg')
            }else {
                img.setAttribute('src', './imagens/idoso-fem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}