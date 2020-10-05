const array = [1, 60, 232, 7, 25, 76, 29, 74, 92]

//elementos filtrados:
const lista = array.filter(n => n > 60 && n < 300)


//soma dos elementos da lista filtrada:
var somatorio = 0;
 somar = (item) => somatorio += item;


soma = lista.forEach(somar)
console.log(`A lista dos valores maiores que 60 é: [${lista}]. A soma dos elementos da lista é: ${somatorio}`)
