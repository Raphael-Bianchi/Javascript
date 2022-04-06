
/*
app.get ('/', (request, response) => {

})
*/

console.log(1)
setTimeout(() => {
  console.log('Ola em 2 segundos...')
}, 0)
console.log(2)
//processo muito pesado

let count = 0

let interval = setInterval(() => {
  console.log('ola')
  count++
  if (count > 5) {
    clearInterval(interval)
  }
}, 1000)
console.log(3)

let interval2 = setInterval(() => {
  console.log('ola2')
  count++
  if (count > 15) {
    clearInterval(interval2)
  }
}, 500)