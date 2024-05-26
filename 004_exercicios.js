// Programação é prática! Criamos mais uma lista de atividades (não obrigatórias) para você exercitar e reforçar ainda mais seu aprendizado. Bora praticar?

// 1 -Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

// const nome = 'Eduardo';
// const idade = 40;
// let maiorDeIdade = true;

// console.log(typeof(nome));
// console.log(typeof(idade));
// console.log(typeof(maiorDeIdade));

// 2 - Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

// const nome = 'Eduardo';
// const sobreNome = 'Escudero';
// const nomeCompletoConcatenado = nome + ' ' + sobreNome;
// const nomeCompletoComTemplateString = `${nome} ${sobreNome}`;

// console.log(nomeCompletoConcatenado);
// console.log(nomeCompletoComTemplateString);

// 3 - Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

// const nome = 'Eduardo Escudero';
// const idade = 40;
// const mensagem = `Meu nome é ${nome} e tenho ${idade} anos de idade.`;
// console.log(mensagem);

// 4 - Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

// let variavel = 'Texto';
// console.log(variavel);
// variavel = 40;
// console.log(variavel);

// 5 - Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

// var nome = 'Eduardo';

// if(true) {
//     var sobreNome = 'Escudero';
//     console.log(nome + ' ' + sobreNome);
// }

// console.log(nome + ' ' + sobreNome);

// let firtName = 'Eduardo';

// if(true) {
//     let lastName = 'Escudero';
//     console.log(firtName + ' ' + lastName);
// }

// console.log(firtName + ' ' + lastName);

// 6 - Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

// let estaChovendo = false;

// if(estaChovendo) {
//     console.log('Leve guarda-chuva, pois está chovendo!')
// } else {
//     console.log('Não está chovendo!')
// }