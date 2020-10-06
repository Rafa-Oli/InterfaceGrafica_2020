const readline = require('readline');

let entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
entrada.question(`Valor Monetário:`, (valor) => {
 calcula(parseFloat(valor));
    entrada.close();
});

function calcula(valor) {
    const notas = [200, 100, 50.00, 20, 10, 5, 2];
    const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
    console.log('NOTAS:')
    notas.forEach(nota => { console.log(`${parseInt(valor / nota)} nota(s) de R$ ${nota.toFixed(2)}`); valor %= nota;});
    console.log('MOEDAS:')
    moedas.forEach(moeda => { console.log(`${parseInt(valor / moeda)} moedas de R$ ${moeda.toFixed(2)}`); valor = (valor %= moeda) + 0.00001;});
}