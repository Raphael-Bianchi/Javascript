const {
  readFile,
  writeFile
} = require('./fs-promise')

//const fs = require('./fs-promise')
//const readFile = fs.readFile
//const writeFile = fs.writeFile

/*
//callbackhell
fs.readFile('Aula2/temporizadores.js', (err, data) => {
  fs.writeFile('Aula2/temporizador-copy.js', data, (err) => {
    console.log('Arquivo copiado')
  })
})
*/

// promises 

/*
const readFile = path => new Promise((resolve, reject) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

const writeFile = (path, data) => new Promise((resolve, reject) => {
  fs.writeFile(path, data, (err) => {
    if (err) {
      reject(err)
    } else {
      resolve()
    }
  })
})
*/
/*
readFile('Aula2/temporizadores.js')
  .then(data => writeFile('Aula2/copia-promise.js', data))
  .then(() => console.log('Arquivo Copiado'))
  .catch(err => console.log(err))
*/

// async/await

const copyFile = async () => {
  console.log('Olá async/await')
  try {
    const data = await readFile('Aula2/temporizadores.js--')
    await writeFile('Aula2/teste-copy-async-await.js', data)
    //console.log(String(data))
    console.log('Arquivo lido e escrito')
  } catch (err) {
    console.log('Erro', err)
  }
}

copyFile().then(() => console.log('fim do async/await'))

