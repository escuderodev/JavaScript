console.log('\n===== Calculando a média das notas =====')

const notas = [10,6.5,7]
let somaDasNotas = 0
let media = 0

notas.push(7.5)

for(let i = 0; i < 4; i++) {
    console.log(`${i + 1}ª nota: ${notas[i]}`)
    somaDasNotas += notas[i]
}

media = somaDasNotas / notas.length

console.log(`A média das notas é ${media.toFixed(2)}.`)