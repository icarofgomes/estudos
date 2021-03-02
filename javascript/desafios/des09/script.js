function reajuste(){
    nome = prompt('Qual é o nome do funcionário?')
    salario = Number(prompt(`Qual é o salário de ${nome}?`))
    porcentagem = Number(prompt(`O salário de ${nome} será ajustado em qual porcentagem?`)).toFixed(1)
    aumento = salario*(porcentagem/100)
    sal = salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    aum = aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    final = (salario+aumento).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    res = document.querySelector('div#res')
    res.innerHTML = `<p>O salário atual é ${sal}.</p>`
    res.innerHTML += `<p>Com um aumento de ${porcentagem}%, o salário vai aumentar ${aum} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${final}.</p>`
}