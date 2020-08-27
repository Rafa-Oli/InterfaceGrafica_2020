function OrdenarInteiros() {
    var numeros = document.getElementById("textNumber").value;
    var numerosIn = document.getElementById("textNumber").value;
    numeros = numeros.split(",");

    for (i = 0; i < numeros.length - 1; i++) {
        index = i;
        for (j = i + 1; j < numeros.length; j++) {
            if (parseInt(numeros[j]) < parseInt(numeros[index])) {
                index = j;
            }
        }
        NumberSm = numeros[index];
        numeros[index] = numeros[i];
        numeros[i] = NumberSm;
    }
    document.write("Lista para ordenar: " + numerosIn + "<hr>");

    document.write("A lista ordenada é " + numeros);


}
