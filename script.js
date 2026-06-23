// 1. Definimos las frases y sus fechas (Formato: Año-Mes-Día)
// He configurado los primeros días con fechas que ya pasaron o que son hoy para que puedas probarlos.
const datosCalendario = [
    { fecha: "2026-06-27", diaAsignado: "27 Jun", frase: "Apenas me fui y ya te extraño. Te amo 💕" },
    { fecha: "2026-06-28", diaAsignado: "28 Jun", frase: "Día dos y ya hace falta verte. Disfruta tu domingo mi amor" },
    { fecha: "2026-06-29", diaAsignado: "29 Jun", frase: "¡Con toda la actitud hoy! Éxito en la semana, amor. Desde acá te echo porras" },
    { fecha: "2026-06-30", diaAsignado: "30 Jun", frase: "Recuerda que eres el amor de mi vida. Fin del comunicado" },
    { fecha: "2026-07-01", diaAsignado: "1 Jul", frase: "Oficialmente ya es julio. Un mes hermoso porque es el mes en el que regreso a molestarte" },
    { fecha: "2026-07-02", diaAsignado: "2 Jul", frase: "Si me extrañas, acuérdate de que yo a ti más. Gracias por apoyarme siempre, eres el mejor" },
    { fecha: "2026-07-03", diaAsignado: "3 Jul", frase: "¡Por fin es viernes! Toma una mezcalita a mi salud y guárdame mis abrazos acumulados" },
    { fecha: "2026-07-04", diaAsignado: "4 Jul", frase: "¡Mitad del viaje lista! Ya falta menos para volver a verte. Te amo" },
    { fecha: "2026-07-05", diaAsignado: "5 Jul", frase: "Me encantaría hacer nada contigo este domingo. Ve una peli rica hoy" },
    { fecha: "2026-07-06", diaAsignado: "6 Jul", frase: "¡Cumpleaños de mi persona favorita y último lunes separados! Momento de abrir tu carta. Cuenta regresiva activada..." },
    { fecha: "2026-07-07", diaAsignado: "7 Jul", frase: "Te amo tanto, por si tenías la duda hoy por la mañana" },
    { fecha: "2026-07-08", diaAsignado: "8 Jul", frase: "Me encantas y me haces una falta tremenda. Ya casi nos vemos" },
    { fecha: "2026-07-09", diaAsignado: "9 Jul", frase: "Solo dos días más... Me debes muchos abrazos" },
    { fecha: "2026-07-10", diaAsignado: "10 Jul", frase: "¡Es mañana! Duerme bien hoy porque este fin de semana te voy a cobrar todos los besos juntos" },
    { fecha: "2026-07-11", diaAsignado: "11 Jul", frase: "¡Pronto nos vemos! Ya voy de regreso amor ❤️✨" }
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