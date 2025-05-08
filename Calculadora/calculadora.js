function calcularEdad() {
    const year = parseInt(document.getElementById("yearInput").value);
    const currentYear = new Date().getFullYear();
    const edad = currentYear - year;
    document.getElementById("resultado").textContent = `Tienes ${edad} años.`;
}
