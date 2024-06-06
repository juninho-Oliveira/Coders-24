// Entrada de dados

// const prompt = require('readline-sync')

// const idade = prompt.question('Qual e a sua idade?')

// const idadeNumber = Number(idade)

// console.log(idadeNumber, typeof idadeNumber);


// Coerção Explicita (Conversão Manuel)

console.log(Number('x')); // NaN: Not a Number

console.log(String(10), typeof String(10));

console.log(Boolean(-1));

// Coerção Inplicita 

console.log(1 + '1')
console.log(10 - '5')
console.log(10 + '5')
console.log(10 * '5')
console.log(10 / '5')

// Qual será a saída desse código ?
let n = 1 + '1'

n = n -1

console.log(n) //10

// Qual será a saída desse código ?
console.log(2 + 3 + 4 + "5") //95

// Qual será a saída desse código ?
console.log("5" + 2 + 3 + 4 ) //5234

// Qual será a saída desse código ?
console.log('10' - '4' - '3' - 2 + '5') //15


