//c-like

const valor = 10
if (valor === 10) {

}

let valor2 = 20

valor2 = 10

console.log(valor, valor2)

const objeto = {
  chave: 'valor1',
  chave2: 'valor2'
}
console.log(objeto)

const str = 'Raphael Bianchi'
console.log(str)

//Em javascrip "functions are first class citizens", ou seja,
//as funções são variáveis como inteiros ou string
const soma = function (a, b) {
  return a + b
}
console.log(soma(1, 2))

const calculadora = function (op, a, b) {
  return op(a, b)
}

console.log(calculadora(soma, 1, 4))

const vetor = [1, 2, 3, 4, 5]
const dobrado = vetor.map(function (item) {
  return item * 2
})
console.log(vetor, dobrado)

const vetor2 = [6, 7, 8, 9, 10]
const vetorobjetodobrado = vetor2.map(function (item) {
  return { original: item, vetorobjetodobrado: item * 2 }
})
console.log(vetor2, vetorobjetodobrado)

const pares = vetor.filter(function (item) {
  return item % 2 === 0
})
console.log('Pares:', pares)

const paresdobrado = vetor.filter(function (item) {
  return item % 2 === 0
}).map(function (item) {
  return item * 2
})
console.log('Pares dobrado:', paresdobrado)

//arrow function
const dobrar = item => item * 2
const somentepares = item => item % 2 === 0
const paresdobradoarrow = vetor.filter(somentepares).map(dobrar)
console.log('Pares dobrado:', paresdobradoarrow)

//high order function é uma função que recebe outra função
const somar = (acumulado, atual) => acumulado + atual
const somatorio = paresdobradoarrow.reduce(somar, 10)
console.log('Somar com reduce', somatorio)

//MAP TE RETORNA UM VETOR O REDUCE TE RETORNA UM ÚNICO VALOR OU OBJETO SEI LA 