function InverterInteiros() {
    numeros = document.getElementById("textNumber").value;
    var numerosInvertidos = "";
    for (i = numeros.length - 1; i >= 0; i--) {
        numerosInvertidos += numeros[i];
    }
    alert("Os números invertidos são " + numerosInvertidos);
}