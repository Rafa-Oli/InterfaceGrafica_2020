function CalcularFatorial() {
    var numeros = document.getElementById("textNumber").value;
    numeros = numeros.split(",");

    for (i = 0; i < numeros.length; i++) {
        let fatorial = 1;
        for (j = 1; j <= parseInt(numeros[i]); j++) {
            fatorial *= j;
        }
        document.write("O fatorial do número " + numeros[i] + " é " + fatorial + "<hr>");
    }

}