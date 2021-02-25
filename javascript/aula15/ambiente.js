let num = [5, 8, 2, 9, 3] //Definindo variável composta(array/vetor)
num.push(1) // Acrescentando elementos na variável composta
num.sort() // Ordenando elementos na variável composta
console.log(`Os elementos do vetor são: ${num}`)//Exibindo elementos
console.log(`O vetor tem ${num.length} posições.`)//Contando posições
console.log(`O primeiro valor do vetor é o ${num[0]}.`)//O valor do elemento em uma determinada posição
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
} // Exibindo elementos individualmente em cada posição
for(let c in num){
    console.log(`Valor: ${num[c]}.`)
} // Forma simplificada de exibir elementos individualmente
let posição = num.indexOf(7)//IndexOf para descobrir qual a posição de determinado elemento de uma array, caso não encontre o elemento é retornado o valor -1. 
if (posição == -1){
    console.log('O valor não foi encontrado.')
}else{
    console.log(`Posição: ${posição}.`)
} // Código para retornar a posição de um determinado elemento, caso não encontre retorna uma mensagem de valor não encontrado.