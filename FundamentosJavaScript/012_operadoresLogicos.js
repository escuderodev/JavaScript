const n1 = 8
const n2 = 5
const n3 = 10
const n4 = 6
const media = (n1 + n2 + n3 + n4) / 4
const faltas = 15

if(faltas >= 15) {
    console.log(`Você faltou ${faltas} vezes e por isso foi reprovado!`)
} else if(media >= 7) {
    console.log(`Sua média foi ${media.toFixed(2)} e você foi aprovado!`)
} else if(media >= 5) {
    console.log(`Sua média foi ${media.toFixed(2)} e você está de recuperação!`)
} else {
    console.log(`Sua média foi ${media.toFixed(2)} e você foi reprovado!`)
}

const time = 'Palmeiras'
const mundial = true

if(time === 'Corinthians' && mundial) {
    console.log(`\n${time}, você é Bi-Campeão Mundial de Clubes!`)
} else if(time === 'Palmeiras' && mundial) {
    console.log(`\n${time} não tem Mundial!`)
} else {
    console.log('\nTime inválido')
}