
const readline = require('readline');

let entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

entrada.question('Digite a data de entrega: ', (E) => {
    let nums= E.split(" ")
    verifica(parseInt(nums[0]), parseInt(nums[1]));
    entrada.close();
});

function verifica(E,D){
    if(D - E === 6){
        console.log("Muito bem! O aluno está apto a apresentar até o natal!")
    }
}
