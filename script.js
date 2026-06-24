// 1. Definimos las frases, sus fechas (Formato: Año-Mes-Día), IDs de Spotify y rutas de imágenes
const datosCalendario = [
    { fecha: "2026-06-23", diaAsignado: "27 Jun", frase: "Apenas me fui y ya te extraño. Te amo 💕", spotifyId: "1r2sbgkFxsgrIzhBI0Cc2q", imagen: "fotos/27-jun.jpg" }, // Sabes - Andrés Obregón
    { fecha: "2026-06-23", diaAsignado: "28 Jun", frase: "Día dos y ya hace falta verte. Disfruta tu domingo mi amor", spotifyId: "407LgLkk1uM3wMO6jVRe0a", imagen: "fotos/28-jun.jpg" }, // honeybee - Olivia Rodrigo
    { fecha: "2026-06-23", diaAsignado: "29 Jun", frase: "¡Con toda la actitud hoy! Éxito en la semana, amor. Desde acá te echo porras", spotifyId: "1TLFTJWFxDpD7MrrfJXRpH", imagen: "fotos/29-jun.jpg" }, // Grecia - elsa y elmar
    { fecha: "2026-06-23", diaAsignado: "30 Jun", frase: "Recuerda que eres el amor de mi vida.", spotifyId: "00kIWJu9IHiQ6i0qJAU0Z9", imagen: "fotos/30-jun.jpg" }, // Amor completo - Mon Laferte
    { fecha: "2026-06-23", diaAsignado: "1 Jul", frase: "Oficialmente ya es julio. Un mes hermoso porque es el mes en el que regreso a molestarte", spotifyId: "1dGr1c8CrMLDpV6mPbImSI", imagen: "fotos/1-jul.jpg" }, // Lover - Taylor Swift
    { fecha: "2026-06-23", diaAsignado: "2 Jul", frase: "Si me extrañas, acuérdate de que yo a ti más. Gracias por apoyarme siempre, eres el mejor", spotifyId: "4PpuZIMmeng6qPicveSI22", imagen: "fotos/2-jul.jpg" }, // Beso - Josean Log
    { fecha: "2026-06-23", diaAsignado: "3 Jul", frase: "¡Por fin es viernes! Toma una mezcalita a mi salud y guárdame mis abrazos acumulados", spotifyId: "0vxg243s2Ak7yFuMIdKLGA", imagen: "fotos/3-jul.jpg" }, // I Love You - Little Mix
    { fecha: "2026-06-23", diaAsignado: "4 Jul", frase: "¡Mitad del viaje lista! Ya falta menos para volver a verte. Te amo", spotifyId: "7BqBn9nzAq8spo5e7cZ0dJ", imagen: "fotos/4-jul.jpg" }, // Just The Way You Are - Bruno Mars
    { fecha: "2026-06-23", diaAsignado: "5 Jul", frase: "Me encantaría hacer nada contigo este domingo. Ve una peli rica hoy", spotifyId: "51MY23GH5wPh3Y3fEZvPYy", imagen: "fotos/5-jul.jpg" }, // Silent Disco - JADE
    { fecha: "2026-06-23", diaAsignado: "6 Jul", frase: "¡Cumpleaños de mi persona favorita y último lunes separados! Momento de abrir tu carta. Cuenta regresiva activada...", spotifyId: "3YmA3gZqlXl0MkwhkVKxRy", imagen: "fotos/6-jul.jpg" }, // Eres mi Verdad - Maná & Shakira
    { fecha: "2026-06-23", diaAsignado: "7 Jul", frase: "Te amo tanto, por si tenías la duda hoy por la mañana", spotifyId: "6hpuesKPNa3WhV48O7Fa47", imagen: "fotos/7-jul.jpg" }, // SUPERESTRELLA - Aitana
    { fecha: "2026-06-23", diaAsignado: "8 Jul", frase: "Me encantas y me haces una falta tremenda. Ya casi nos vemos", spotifyId: "3OU489Tm4FEL2zslbaIUa9", imagen: "fotos/8-jul.jpg" }, // Contigo - Carla Morrison
    { fecha: "2026-06-23", diaAsignado: "9 Jul", frase: "Solo dos días más... Me debes muchos abrazos", spotifyId: "0ZqhB08GsFc4xfV07AsXzE", imagen: "fotos/9-jul.jpg" }, // Tanto - Jesse & Joy
    { fecha: "2026-06-23", diaAsignado: "10 Jul", frase: "¡Es mañana! Duerme bien hoy porque este fin de semana te voy a cobrar todos los besos juntos", spotifyId: "7LVHVU3tWfcxj5aiPFEW4Q", imagen: "fotos/10-jul.jpg" }, // Fix You - Coldplay
    { fecha: "2026-06-23", diaAsignado: "11 Jul", frase: "¡Pronto nos vemos! Ya voy de regreso amor ❤️✨", spotifyId: "5XsAal7ZcWg1I5T4NcRjkv", imagen: "fotos/11-jul.jpg" } // Halley's Comet - Billie Eilish
];

// Mensajes graciosos si Oscar intenta ver días del futuro
const frasesTrampa = [
    "🔒 ¡Ey, sin hacer trampa! El futuro aún no está escrito.",
    "🔒 Alto ahí. Cada sorpresa tiene su momento perfecto. 🕒"
];

const contenedor = document.getElementById("calendario");
const modal = document.getElementById("modal");
const fraseTexto = document.getElementById("frase-texto");
const cerrarModal = document.getElementById("cerrar-modal");
const spotifyContenedor = document.getElementById("spotify-contenedor");
const modalImagen = document.getElementById("modal-imagen"); // Elemento de la foto

let diasDesbloqueados = 0;

// Obtener la fecha de hoy en la zona horaria local (Formato: YYYY-MM-DD)
const hoy = new Date();
const año = hoy.getFullYear();
const mes = String(hoy.getMonth() + 1).padStart(2, '0');
const dia = String(hoy.getDate()).padStart(2, '0');
const hoyFormateado = `${año}-${mes}-${dia}`; 

// 2. Función para pintar los botones en la pantalla
datosCalendario.forEach(item => {
    const boton = document.createElement("button");
    boton.innerText = item.diaAsignado;
    boton.classList.add("dia-boton");

    if (hoyFormateado >= item.fecha) {
        // DESBLOQUEADO
        diasDesbloqueados++;
        boton.classList.add("desbloqueado");
        boton.addEventListener("click", () => {
            fraseTexto.innerText = item.frase;
            
            // 📸 Control de visualización de la foto
            if (item.imagen && item.imagen !== "") {
                modalImagen.src = item.imagen;
                modalImagen.classList.remove("oculto");
            } else {
                modalImagen.classList.add("oculto");
                modalImagen.src = "";
            }
            
            // Si el día tiene una canción configurada, inserta el reproductor oficial
            if (item.spotifyId) {
                spotifyContenedor.innerHTML = `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${item.spotifyId}?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
            } else {
                spotifyContenedor.innerHTML = "";
            }
            
            modal.classList.remove("oculto");
        });
    } else {
        // BLOQUEADO
        boton.classList.add("bloqueado");
        boton.addEventListener("click", () => {
            const mensajeRandom = frasesTrampa[Math.floor(Math.random() * frasesTrampa.length)];
            alert(mensajeRandom + " (" + item.diaAsignado + ")");
        });
    }

    contenedor.appendChild(boton);
});

// 3. Actualizar barra de progreso al cargar la página
const textoProgreso = document.getElementById("texto-progreso");
const barraLlena = document.getElementById("barra-llena");

textoProgreso.innerText = `Días disponibles para Oscar: ${diasDesbloqueados} de ${datosCalendario.length}`;
const porcentaje = (diasDesbloqueados / datosCalendario.length) * 100;
barraLlena.style.width = `${porcentaje}%`;

// 4. Cerrar la ventana emergente, limpiar el reproductor y la foto
const resetearModal = () => {
    modal.classList.add("oculto");
    spotifyContenedor.innerHTML = "";
    modalImagen.src = "";
    modalImagen.classList.add("oculto");
};

cerrarModal.addEventListener("click", resetearModal);

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        resetearModal();
    }
});