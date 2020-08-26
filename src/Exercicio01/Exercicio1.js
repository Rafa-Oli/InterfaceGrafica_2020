function calcularQuadrados() {
    var numeros = document.getElementById("textNumber").value;
    numeros = numeros.split(",");

    for (i = 0; i < numeros.length; i++) {
        var quadrado = parseInt(numeros[i]) * parseInt(numeros[i]);
        document.write("O quadrado de " + numeros[i] + " é " + quadrado + "<hr>");
    }
}