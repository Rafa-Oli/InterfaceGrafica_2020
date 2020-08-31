function CalcularValores() {
    var numeros = document.getElementById("textNumber").value;
    numeros = numeros.split(",");
    var soma = 0;
    var positivos = 0;
    var negativos = 0;
    for (i = 0; i < numeros.length; i++) {
        soma += parseInt(numeros[i]);
        if (parseInt(numeros[i]) > 0) {
            positivos++;
        } else {
            negativos++;
        }

    }
    media = soma / numeros.length;
    percentualPosi= (positivos/numeros.length)*100;
    percentualNeg= (negativos/numeros.length)*100;
    document.write("A média dos números é " + media.toFixed(2) + "<hr>");
    document.write("A quantidade de números positivos é " + positivos + "<hr>");
    document.write("A quantidade de números negativos é " + negativos + "<hr>");
    document.write("O percentual de números positivos é " + percentualPosi.toFixed(2) + "%" + "<hr>");
    document.write("O percentual de números negativos é " + percentualNeg.toFixed(2) + "%" + "<hr>");
}

//-20,40,30,-45,12,13