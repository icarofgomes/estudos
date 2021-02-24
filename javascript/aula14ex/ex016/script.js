function contador(){
    var inicio = document.querySelector('input#txtin')
    var fim = document.querySelector('input#txtfi')
    var passo = document.querySelector('input#txtpa')
    var res = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('ERRO! Faltam dados...')
        res.innerHTML = 'Impossível calcular com os dados informados!'
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            alert('Passo inválido! Consirando passo de 1')
            p = 1
        }
        if (i < f){
            for (var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else{
            for (var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        res.innerHTML += `\u{1F3C1}`
        }
    }
}
