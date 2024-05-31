function exibirMensagem(mensagem) {
    console.log(mensagem)
}

function verificarMaiorIdade(idade) {
    if(idade >= 18) {
        console.log(`Você tem ${idade} anos e é maior de idade!`)
    } else {
        console.log(`Você tem ${idade} anos e é menor de idade!`)
    }
}

function soma(n1, n2) {
    return n1 + n2
}

exibirMensagem('Palmeiras não tem mundial!')
verificarMaiorIdade(50)
console.log(soma(2,1))

