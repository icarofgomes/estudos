function calcular(){
    var num = document.querySelector('input#txtnum')
    var tab = document.querySelector('select#seltab')
    if (num.value.length == 0){
        alert('Erro! Digite um número...')
    }else{
        var n = Number(num.value)
    }
    tab.innerHTML = ''
    for (var c = 1; c <= 10; c ++){
        var item = document.createElement('option')
        item.text = `${c} x ${n} = ${c*n}`
        item.value = `tab${c}`
        tab.appendChild(item)
    }
}