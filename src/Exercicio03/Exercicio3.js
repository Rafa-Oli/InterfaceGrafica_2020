function verificarMaiorEMenor() {
    var numeros = document.getElementById("textNumber").value;
    numeros = numeros.split(",");
    var Qmaiores = 0;
    var Qmenores = 0
    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] >= 18) {
            Qmaiores++;
        } else {
            Qmenores++;
        }
    }
    alert("A quantidade pessoas maiores de 18 anos é " + Qmaiores + " e menores de 18 anos é " + Qmenores);

}