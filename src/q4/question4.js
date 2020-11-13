

const array = ['javascript', 'java', 'dart', 'python']



 function colocarTodasPalavrasEmMaiusculo(array) {
 return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < array.length; i++) {
                if (typeof array[i] === "number") {
                    reject(`Ocorreu um erro: valor não é string`)
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
}
function ordenarPalavras(array) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
            array.forEach(element => {
                if (typeof element === "number") {
                    reject("Ocorreu um erro: valor não é string")
                }
            });
            resolve(array.sort())

         }catch(e){
             console.log(e)
         } }, 1000)
    })
}



colocarTodasPalavrasEmMaiusculo(array).then(console.log).catch(console.log)
ordenarPalavras(array).then(console.log).catch(console.log)