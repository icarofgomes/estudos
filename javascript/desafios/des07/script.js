cot = prompt('Qual é a cotação do dólar hoje?')
function converter(){
    real = Number(prompt('Quantos reais deseja converter?'))
    res = document.querySelector('div#res')
    real_padrao = real.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    dolar = real/cot
    dol = dolar.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    res.innerHTML = `<p>Com <strong>${real_padrao}</strong> você pode comprar <strong>${dol}</strong>.</p>`
}