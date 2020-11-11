
const readline = require('readline');

let entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

entrada.question('Digite a data de entrega', (E) => {
    let nums= E.split(" ")
    verifica(nums[0], nums[1]);
});

function verifica(E,D){

    console.log(E,D)


}
