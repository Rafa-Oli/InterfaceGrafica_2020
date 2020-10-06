function progAritmetica({ n, a1, r }) {
    console.log('Elementos: ')
    soma = 0
    for (let i = 1; i <= n; i++) {
        console.log(a1)
        soma += a1
        a1 = a1 + r
    }
    console.log('Soma dos elementos: ' + soma)
}

function progGeometrica({ n, a1, r }) {
    console.log('Elementos: ')
    soma = 0
    for (let i = 1; i <= n; i++) {
        console.log(a1)
        soma += a1
        a1 = a1 * r
    }
    console.log('Soma dos elementos: ' + soma)
}

const obj = { id: 1, nome: 'Progressao', n: 10, a1: 4, r: 2 }
console.log('Progressão Aritmética: ')
progAritmetica(obj)
console.log('\nProgressão Geomética: ')
progGeometrica(obj)
