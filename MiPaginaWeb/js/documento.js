// Script para revisar y gestionar los datos del documento
document.addEventListener("DOMContentLoaded", () => {
    console.log("El documento index.html ha sido cargado y esta listo para la revision de datos.");

    // Ejemplo de revision: comprobar si existen los elementos clave en el DOM
    const titulo = document.querySelector("h1");
    const stockSpan = document.getElementById("stock");
    const envioSpan = document.getElementById("envio");

    if (titulo) {
        console.log("Titulo detectado:", titulo.textContent);
    }

    // Simulacion de revision de datos dinamicos (puedes cambiar a true o false segun necesites)
    const hayStock = true; 
    const envioDomicilio = false;

    if (stockSpan) {
        stockSpan.classList.add(hayStock ? "true" : "false");
    }

    if (envioSpan) {
        envioSpan.classList.add(envioDomicilio ? "true" : "false");
    }
});