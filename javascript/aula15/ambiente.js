let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`Os elementos do vetor são: ${num}`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é o ${num[0]}.`)
for (var pos = 0; pos < num.length; pos++){
    console.log(`${num[pos]}`)
}