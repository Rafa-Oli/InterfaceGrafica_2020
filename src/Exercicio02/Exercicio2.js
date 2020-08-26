function verificarMaior() {
    var numeros = document.getElementById("textNumber").value;
    numeros = numeros.split(",");
    var maiorValor = 0;
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] > maiorValor) {
            maiorValor = parseInt(numeros[i]);
        }

    }
    alert("O maior valor é " + maiorValor);
}