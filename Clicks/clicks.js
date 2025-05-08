let contador = 0;

function incrementar() {
    contador++;
    document.getElementById("contador").textContent = `has hecho click ${contador} veces`;
}

function reiniciar() {
    contador = 0;
    document.getElementById("contador").textContent = "has hecho clic 0 veces";
}