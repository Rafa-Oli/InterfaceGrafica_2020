
function colocarTodasPalavrasEmMaiusculo(palavras){
    return new Promise(function(resolve,reject){

        try{
        resolve(palavras.map(e => e.toUpperCase()))
        }catch(e){

            reject('Ocorreu um erro')
        }
    })
}
const palavras= ['javascript', 'java', 'dart', 'python',1]

colocarTodasPalavrasEmMaiusculo(palavras)
.then(console.log)
.catch(erro => console.log(erro))




