function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = './imagens/manha.jpg'
        window.document.body.style.background = '#ebce65'

    }else if (hora >= 12 && hora < 18) {
        img.src = './imagens/tarde.jpg'
        window.document.body.style.background = '#B89072'

    }else {
        img.src = './imagens/noite.jpg'
        window.document.body.style.background = '#A9F2FB'
    }
}