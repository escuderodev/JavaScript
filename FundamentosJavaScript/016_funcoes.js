const idade = 18
const verificarMaiorIdade = (idade) => {
    if(idade >= 18) {
        return `Você tem ${idade} anos e é maior de idade!`
    } else {
        return `Você tem ${idade} anos e é menor de idade!`
    }
}
console.log(verificarMaiorIdade(idade))

const nome = 'Eduardo Escudero'
const exibeNome = (nome) => nome
console.log(exibeNome(nome))