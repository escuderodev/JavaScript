// Programação é prática! Criamos mais uma lista de atividades (não obrigatórias) para você exercitar e reforçar ainda mais seu aprendizado. Bora praticar?

console.log('Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas')
const frase = 'Palmeiras não tem mundial!'
console.log(frase)
console.log(frase.length)
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())

console.log('\nDeclare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console')
let nullable = null
let undefined
console.log(nullable)
console.log(undefined)

console.log('\nCrie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console')
const nome = 'Eduardo'
const idade = 40
let casado = true
console.log(`${nome} tem ${idade} anos de idade e é casado ${casado}.`)

console.log('\nCrie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console')
const numero = 10
let numeroComoTexto = String(numero)
console.log(numero)
console.log(numeroComoTexto)
console.log(typeof(numero))
console.log(typeof(numeroComoTexto))

console.log('\nCrie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.')
const texto = 'Palmeiras não tem mundial!'
console.log(texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.slice(3,5))
console.log(texto.length)
console.log(texto.replace(' ','_'))
console.log(texto.split(' ', 2))