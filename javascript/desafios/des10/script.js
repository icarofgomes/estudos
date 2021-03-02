function calcular(){
    a = Number(prompt('Qual é o valor de a?'))
    b = Number(prompt('Qual é o valor de b?'))
    c = Number(prompt('Qual é o valor de c?'))
    delta = (b**2) - 4 * a * c
    res = document.querySelector('div#res')
    res.innerHTML = `<h2>Resolvendo...</h2>`
    res.innerHTML += `<p>A fórmula atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4. ${a}. ${c}</strong>`
    res.innerHTML += `<p>O valor calculador foi <strong>&Delta; = ${delta}</strong></p>`
}