let amigo = {nome:'José',
 sexo:'M', 
 peso: 54.75,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)
