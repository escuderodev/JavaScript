const alunos = ['Eduardo','Carol','Juan','Alícia'];
const medias = [9,10,6,7];

const lista = [alunos, medias];

console.log(lista);

function exibeAlunoComNota(aluno) {
    if(lista[0].includes(aluno)) {
        const index = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][index];
        console.log(`O aluno ${aluno} possui a média ${mediaAluno}.`);
    } else {
        console.log('Aluno não encontrado!');
    }
}

exibeAlunoComNota('Pedro');