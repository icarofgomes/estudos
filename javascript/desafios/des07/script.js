let cot = prompt('Qual é a cotação do dólar hoje?')
function converter(){
    let real = Number(prompt('Quantos reais deseja converter?'))
    let res = document.querySelector('div#res')
    let real_padrao = real.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let dolar = real/cot
    let dol = dolar.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    res.innerHTML = `<p>Com <strong>${real_padrao}</strong> você pode comprar <strong>${dol}</strong>.</p>`
}