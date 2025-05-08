function convertirTexto() {
    const texto = document.getElementById("textoEntrada").value;
    const convertido = texto.toUpperCase();
    document.getElementById("textoConvertido").textContent = convertido;
}
