const notas = [0,6,7,7];
let somaDasNotas = 0;
let media = 0;

for(let nota of notas) {
    somaDasNotas += nota;
};

media = somaDasNotas / notas.length;

if(media >= 6) {
    console.log(`A média das notas é ${media.toFixed(1)} e vocẽ foi aprovado!`);
} else if(media >= 5) {
    console.log(`A média das notas é ${media.toFixed(1)} e vocẽ está de recuperação!`);
} else {
    console.log(`A média das notas é ${media.toFixed(1)} e vocẽ foi reprovado!`);
}

