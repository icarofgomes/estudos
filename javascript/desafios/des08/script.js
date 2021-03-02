function desconto(){
    let produto = prompt('Qual é o produto que está comprando?')
    let preço = Number(prompt(`Qual é o valor de ${produto}?`))
    let desconto = preço * 0.1
    let desc = desconto.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})
    let final = preço - desconto
    let real = preço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let valor= final.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let res = document.querySelector('div#res')
    res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}...</h2>`
    res.innerHTML += `<p>O preço original era ${real}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar ${desc} de desconto(-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar ${valor} no produto ${produto}.</p>`
}