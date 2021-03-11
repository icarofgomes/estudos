function simular(){
    let valor = Number(document.querySelector('input#valor').value);
    let prazo = Number(document.querySelector('input#prazo').value);
    let juros = Number(document.querySelector('input#juros').value);
    let prazoMeses = prazo*12
    let jurosMes = (1+juros)**(1/12)-1
    let jurosAcumulado = jurosMes*valor
    function adcElemento(){
        var divNova = document.createElement("div");
        var conteudoNovo = document.createTextNode('Hello World!')
        divNova.appendChild(conteudoNovo);
    }
    adcElemento()
}

