function verificarQuebraData() {
    var numeros = document.getElementById("textNumber").value;
    numeros = numeros.split("/");
    dia = numeros[0];
    mes = numeros[1];
    ano = numeros[2];

    alert("O dia é " + dia + " do mês " + mes + " do ano " + ano);
}