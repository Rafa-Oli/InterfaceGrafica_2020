var isEqual = require('lodash.isequal');

function map(func,array) {
  
const arrayTriplicado = array.reduce((novoArray, elem) => {
    novoArray.push(func(elem))
    return novoArray
},[])

    return arrayTriplicado
};
function executaTeste() {
    const array = [1, 2, 3, 4, 5];
    
    const arrayTriplicado = map((num) => num * 3, array);

    console.log(arrayTriplicado)
    const equal = _.eq(arrayTriplicado, [3, 6, 9, 12, 15])
    if (equal) {
        console.log('✓ Passou no teste!')
    } else {
        console.error('O teste falhou :(')
        console.error('Resultado atual:');
        console.error(arrayTriplicado);
        console.error('Resultado esperado:');
        console.error([3, 6, 9, 12, 15]);
    }
}
executaTeste();