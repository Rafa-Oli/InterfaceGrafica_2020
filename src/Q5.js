
function isPrime({ inicio = 0, fim = 100 }) {
    let texto = '';
    for (let count = inicio; count <= fim; count++) {
        divisores = 0;
        for (var aux = 1; aux <= count; aux++)
            if (count % aux == 0) 
                divisores++;

        if (divisores == 2) { // verificando se a quatidade de divisores(1 ou por ele msm) 
            texto += count + ' '
        };
    }

    return texto
}


console.log(isPrime({ inicio: 20, fim: 40 }))




