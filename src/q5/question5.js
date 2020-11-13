
const array = ['javascript', 'java', 'dart', 'python']
const array2 = ['carro', 'avião', 'data']


async function colocarTodasPalavrasEmMaiusculo(array) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
          reject(`Existe um número no array`)
        }
      }
      resolve(array.map(e => {
        if (typeof e === "string") {
          return e.toUpperCase()
        }
      })
      )
    }, 3000)

  }
  )
  return await promise
}
async function ordenarPalavras(array) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        array.forEach(element => {
          if (typeof element === "number") {
            reject("Ocorreu um erro: valor não é um string")
          }
        });
        resolve(array.sort())

      } catch (e) {
        console.log(e)
      }
    }, 5000)
  })

  return await promise
}



colocarTodasPalavrasEmMaiusculo(array).then(console.log).catch(console.log)
ordenarPalavras(array2).then(console.log).catch(console.log)