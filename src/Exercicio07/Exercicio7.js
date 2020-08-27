function SomarImpares() {
    var numeros = document.getElementById("textNumber").value;
    numeros = numeros.split(",");
    var somaImapares = 0;

    for (i = 0; i < numeros.length; i++) {
        if ((!(parseInt(numeros[i]) % 2 === 0)) && (parseInt(numeros[i]) % 3 === 0)) {
            somaImapares= somaImapares + parseInt(numeros[i]);
        }
    }
    alert("A soma dos impares é : " + somaImapares);
}