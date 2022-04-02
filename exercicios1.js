/*
1) Dado um vetor de números, como poderia ser 
realizada a soma de todos os valores utilizando reduce.
*/

const somar = (acumulado, soma) => acumulado + soma
const vetor = [1, 2, 3]
console.log('Resposta 1 = ', vetor.reduce(somar))

/*
2) Dado um vetor de números, como poderia ser realizada
a soma de todos os valores pares utilizando reduce e filter.
*/

const vetor2 = [1, 2, 3, 4, 5, 6]
const pares = item => item % 2 === 0
console.log('Resposta 2 = ', vetor2
  .filter(pares)
  .reduce(somar))

/*
3) Dado um vetor de números, como poderia ser realizada a soma
de todos os valores ímpares utilizando reduce e filter.
*/

const impares = item => item % 2 !== 0
console.log('Resposta 3 = ', vetor2.filter(impares).reduce(somar))

/*
4) Dado um vetor de valores, retorne um objeto com quantas vezes 
cada valor está presente no vetor 
- Dica: utilize reduce
*/

const vetor3 = [1, 2, 3, 4, 2, 4, 3, 4, 1, 2]

const contador = (acumulado, atual) => {
  if (!acumulado[atual]) {
    acumulado[atual] = 0
  }
  acumulado[atual] += 1
  return acumulado
}
const objcontador = vetor3.reduce(contador, {})
console.log('Resposta 4 = ', objcontador)

/*
5) Dado um vetor de valores, retorne um vetor com 
somente os valores únicos do vetor - aqueles que ocorrem 
apenas 1 vez dentro do vetor.
- Dica 1: utilize reduce, filter e keys
- Dica 2: escreva console.log(objeto.keys()) e veja como 
ele poderá te ajudar neste exercício
*/

const vetor5 = [1, 2, 3, 4, 4, 3, 2, 5, 6]
const howManyTimes = (acumulado, atual) => {
  if (!acumulado[atual]) {
    acumulado[atual] = {
      value: atual,
      occur: 0
    }
  }
  acumulado[atual].occur = acumulado[atual].occur + 1
  return acumulado
}

const contagem = (vetor5.reduce(howManyTimes, {}))

const keys = Object.keys(contagem)
const unique = keys.filter(key => contagem[key].occur === 1)
const uniqueValues = unique.map(atual => contagem[atual].value)

console.log('Resposta 5 = ', uniqueValues)

/*
6) Dado um vetor com números, retorne somente os números pares;
*/

const vetor6 = [1, 2, 3, 4, 5, 6]
const paress = item => item % 2 === 0
const vetorpares = vetor6.filter(paress)
const imprimir = item => {
  console.log(item)
}
console.log('Resposta 6 = ')
vetorpares.forEach(imprimir)

/*
7) Dado um vetor com números, retorne somente os números ímpares;
*/

const imparess = item => item % 2 !== 0

const vetorimpar = vetor6.filter(imparess)

console.log('Resposta 7 = ')
vetorimpar.forEach(imprimir)

/*
8) Uma função é chamada da seguinte forma:
calculadora(10, '+', 20)
crie o corpo da função de forma que ela realize as 4 operações aritméticas
*/

const calculadora = (a, op, b) => {
  const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
  }
  return ops[op](a, b)
  /*
  if (op === '+') {
    return a + b
  }
  if (op === '-') {
    return a - b
  }
  if (op === '*' || 'x') {
    return a * b
  }
  if (op === '/') {
    return a / b
  }
  */
}

/*
9) Modifique a calculadora do exercício anterior para 
que ela receba 2 números e uma função, e realize o cálculo. 
Exemplo:
const soma = (num1, num2) => num1+num2
const calculadoraFn = (....) => ….
calculadoraFn(10, soma, 20)
*/

const calculadorafn = (c, oper, d) => oper(c, d)

const soma = (c, d) => c + d
const sub = (c, d) => c - d
console.log('Resposta 9 soma = ', calculadorafn(10, soma, 20))
console.log('Resposta 9 sub = ', calculadorafn(10, sub, 20))