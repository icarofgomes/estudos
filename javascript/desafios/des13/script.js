function calcular(){
    let nome = prompt('Qual é o nome do aluno?')
    let nota1 = Number(prompt(`Primeira nota de ${nome}:`))
    let nota2 = Number(prompt(`Segunda nota de ${nome}:`))
    let media = (nota1 + nota2)/2
    let res = document.querySelector('div#res')
    res.innerHTML = `<h2>Analisando a situação de ${nome}:</h2>`
    res.innerHTML += `<p>Com as notas ${nota1.toFixed(1).replace('.',',')} e ${nota2.toFixed(1).replace('.',',')} a <strong>média é ${media.toFixed(1).replace('.',',')}</strong></p>`
    if (media < 3){
        res.innerHTML += `Com média abaixo de 3,0 o aluno está `
        res.innerHTML += `<strong><span style="background-color: lightpink; color: darkred;">REPROVADO!</span></strong>`
    } else if (media <= 6){
        res.innerHTML += `Com média entre 3,0 e 6,0 o aluno está em `
        res.innerHTML += `<strong><span style="background-color: lightyellow; color: goldenrod;">RECUPERAÇÃO!</span></strong>`
    }else{
        res.innerHTML += `A média acima de 6,0 o aluno está `
        res.innerHTML += `<strong><span style="background-color: lightgreen; color: darkgreen;">APROVADO!</span></strong>`
    }
}