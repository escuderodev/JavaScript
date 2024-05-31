const nomes = ['Eduardo', 'Carol', 'Juan', 'Alícia', 'Valmir', 'Sônia', 'Anselmo', 'Aléx']

console.log(nomes)

const parte1 = nomes.slice(0,4)
const parte2 = nomes.slice(4,nomes.length)
console.log(parte1)
console.log(parte2)

console.log('\n')

const parte3 = parte1.slice(0,parte1.length / 2)
const parte4 = parte1.slice(parte1.length / 2)
console.log(parte1)
console.log(parte3)
console.log(parte4)
