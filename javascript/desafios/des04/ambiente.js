let preço = 108.54
let preço_real = preço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(preço_real)