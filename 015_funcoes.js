const idade = 18

const verificarMaiorIdade = function(idade) {
    if(idade >= 18) {
        return `Você tem ${idade} anos e é maior de idade!`
    } else {
        return `Você tem ${idade} anos e é menor de idade!`
    }
}

console.log(verificarMaiorIdade(idade))