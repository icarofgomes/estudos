function verificar(){
    let preço1 = Number(prompt('Qual era o preço do produto anteriormente?'))
    let preço2 = Number(prompt('E qual o preço do produto atualmente?'))
    let dif = preço2 - preço1
    let variação = ((dif/preço1)*100).toFixed(2)
    let res = document.querySelector('div#res')
    res.innerHTML = `<h2>Analisando os valores informados</h2>`
    res.innerHTML = `<p>O produto custava ${preço1.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} e agora custa ${preço2.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}.</p>`
    if (dif > 0){
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        res.innerHTML += `<p>O preço subiu ${dif.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variação}% para cima.</p>`
    }else{
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu ${(-dif).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})} em relação ao preço anterior</p>`
        res.innerHTML += `<p>Uma variação de ${-variação}% pra baixo.</p>`
    }
}