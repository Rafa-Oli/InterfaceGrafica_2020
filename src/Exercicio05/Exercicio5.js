function InverterString() {
    stringI = document.getElementById("text").value;
    var stringInvertida = "";
    for (i = stringI.length - 1; i >= 0; i--) {
        stringInvertida += stringI[i];
    }
    alert(" A string invertida é " + stringInvertida);
}