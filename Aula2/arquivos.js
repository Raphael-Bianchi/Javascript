const fs = require('fs')

//callbackhell
fs.readFile('Aula2/temporizadores.js', (err, data) => {
  fs.writeFile('Aula2/temporizador-copy.js', data, (err) => {
    console.log('Arquivo copiado')
  })
})

// promises + async/await

const readFile = path => new Promise((resolve, reject) => {
  fs.readfile
})

//Aula: Aula 02: Conceitos Fundamentais do Javascript (assíncronismo) 14 min

