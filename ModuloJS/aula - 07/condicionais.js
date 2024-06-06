const promp = require('readline-sync')

const idade = 18 //Number(promp.question('Qual e sua idade ?'));

// const eMaiorDeIdade = idade >= 18;

// Estrutura condicional: if/else

// Média >= 7 => Aprovado
// Média < 7  e Média >= 5 => Prova final
// Média < 5 => Reprovado

if(idade >= 18) {
    console.log('E maior de idade')
} else {
    console.log('E menor de idade')
}


const mediaAluno = 6.9999;

if (mediaAluno >=7) {
    console.log('Aprovado')
} else if ( mediaAluno >= 5) {
    console.log('Prova final')
} else {
    console.log("Reprovado")
}

//1. Preciso ser maior de idade 
//2. Preciso ter uma CNH 

const idadeDaPessoa = 18;
const temCNH = true;

if (idadeDaPessoa >= 18 && temCNH) {
    console.log('Você pode dirigir!')
} else {
    console.log('Você NÂO pode dirigir!')
}