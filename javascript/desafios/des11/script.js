function verificar(){
    let ano = Number(prompt('Qual é o ano que você quer verificar?'))
    let res = document.querySelector('div#res')
    res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
    if (ano % 400 == 0){
        res.innerHTML += `O ano de ${ano} <strong><span style="background-color: lightgreen; color: darkgreen;">É BISSEXTO!</span></strong>\u{2705}`
    }else if (ano % 100 == 0){
        res.innerHTML += `O ano de ${ano} <strong><span style="background-color: lightpink; color: darkred;">NÃO É BISSEXTO!</span></strong>\u{274C}`
    }else if (ano % 4 == 0){
        res.innerHTML += `O ano de ${ano} <strong><span style="background-color: lightgreen; color: darkgreen;">É BISSEXTO!</span></strong>\u{2705}`
    }else{
        res.innerHTML += `O ano de ${ano} <strong><span style="background-color: lightpink; color: darkred;">NÃO É BISSEXTO!</span></strong>\u{274C}`
    }
}