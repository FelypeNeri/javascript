function contar() {
    let ini = window.document.getElementById('iinicio')
    let fim = window.document.getElementById('ifim')
    let pass = window.document.getElementById('ipasso')    
    let res = document.getElementById('res')

    if (ini.value.lenght == 0 || fim.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Verificar os dados e tentar novamente!')
    }else {
        res.innerHTML = 'Contando:</br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        
        if (p <= 0)  {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        
        if (i < f) {
            //Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else {
            //Contagem Decrescente 
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }            
        }    
        res.innerHTML += `\u{1F3C1}`    
    }
}