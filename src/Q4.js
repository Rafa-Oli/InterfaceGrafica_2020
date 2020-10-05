var readline = require('readline');
var resp = 0;

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valor = lines.shift();
let n = parseFloat(valor);
nota(n)

function nota(valor) {
    //NOTAS
    n200 = valor / 200;
    r200 = valor % 200;
    n100 = valor / 100;
    r100 = valor % 100;
    n50 = r100 / 50;
    r50 = r100 % 50;
    n20 = r50 / 20;
    r20 = r50 % 20;
    n10 = r20 / 10;
    r10 = r20 % 10;
    n5 = r10 / 5;
    r5 = r10 % 5;
    n2 = r5 / 2;
    r2 = r5 % 2;
    n1 = r2 / 1;
   //MOEDAS      REVER DE 200
    // E= valor * 100;
    // B= E;
    // m100 = B % 100;
    // n= m / 50;
    // o= m % 50;
    // p= o / 25;
    // q= o % 25;
    // r= q / 10;
    // s= q % 10;
    // t= s / 5;
    // u=s % 5;
    console.log('Notas:')
    console.log(`${n200} nota(s) de R$ 200,00`)
    console.log(`${n100} nota(s) de R$ 100,00`)
    console.log(`${n50} nota(s) de R$ 50,00`)
    console.log(`${n20} nota(s) de R$ 20,00`)
    console.log(`${n10} nota(s) de R$ 10,00`)
    console.log(`${n5} nota(s) de R$ 5,00`)
    console.log(`${n2} nota(s) de R$ 2,00`)

}