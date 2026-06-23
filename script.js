// 1. Definimos las frases y sus fechas (Formato: Año-Mes-Día)
// He configurado los primeros días con fechas que ya pasaron o que son hoy para que puedas probarlos.
const datosCalendario = [
    { fecha: "2026-06-21", diaAsignado: "21 Jun", frase: "¡Esta es una frase de un día que ya pasó! 🌟" },
    { fecha: "2026-06-22", diaAsignado: "22 Jun", frase: "¡Ayer también está desbloqueado! ✨" },
    { fecha: "2026-06-23", diaAsignado: "23 Jun", frase: "¡Hoy es 23 de junio! Felicidades, has desbloqueado la frase de hoy. 😊❤️" },
    { fecha: "2026-06-24", diaAsignado: "24 Jun", frase: "Esta es la frase del 24 de junio. ¡Mañana podrás verla! 🕒" },
    { fecha: "2026-06-27", diaAsignado: "27 Jun", frase: "¡Inicio oficial del calendario! 🎁" },
    { fecha: "2026-07-11", diaAsignado: "11 Jul", frase: "¡Último día! Gracias por llegar hasta aquí. ❤️" }
];

const contenedor = document.getElementById("calendario");
const modal = document.getElementById("modal");
const fraseTexto = document.getElementById("frase-texto");
const cerrarModal = document.getElementById("cerrar-modal");

// 2. Función para pintar los botones en la pantalla
datosCalendario.forEach(item => {
    const boton = document.createElement("button");
    boton.innerText = item.diaAsignado;
    boton.classList.add("dia-boton");

    // Obtener la fecha de hoy en la zona horaria local (Formato: YYYY-MM-DD)
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    const hoyFormateado = `${año}-${mes}-${dia}`; 

    if (hoyFormateado >= item.fecha) {
        // DESBLOQUEADO
        boton.classList.add("desbloqueado");
        boton.addEventListener("click", () => {
            fraseTexto.innerText = item.frase;
            modal.classList.remove("oculto");
        });
    } else {
        // BLOQUEADO
        boton.classList.add("bloqueado");
        boton.addEventListener("click", () => {
            alert("🔒 ¡Aún no puedes ver este día! Debes esperar al " + item.diaAsignado);
        });
    }

    contenedor.appendChild(boton);
});

// Cerrar la ventana emergente
cerrarModal.addEventListener("click", () => {
    modal.classList.add("oculto");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("oculto");
    }
});