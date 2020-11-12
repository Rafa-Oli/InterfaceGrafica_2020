
const readline = require('readline');

let entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

entrada.question('Digite a data de entrega', (E) => {
    let nums= E.split(" ")
    verifica(parseInt(nums[0]), parseInt(nums[1]));
});

function verifica(E,D){
    console.log(E,D)



}
