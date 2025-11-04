const objeto_usuarios = {
    usuarios: [
        {
            "idUsuario": 1,
            "nombre": "Lisa Manoban",
            "perfil": "./recursos/usuarios/usuario1.jpg",
            "resena": "&quotTrabajar con el equipo fue una experiencia increíble. Capturaron exactamente la esencia que quería para mi marca y transformaron mis ideas en algo visualmente hermoso. Su atención al detalle y creatividad superaron todas mis expectativas.&quot",
            "trabajo": "./recursos/trabajos/trabajo1.webp"
        },
        {
            "idUsuario": 2,
            "nombre": "Post Malone",
            "perfil": "./recursos/usuarios/usuario2.jpeg",
            "resena": "&quotEl diseño que crearon para mi proyecto fue simplemente espectacular. Se nota que aman lo que hacen y eso se refleja en la calidad del resultado final. Comunicación excelente y un proceso muy profesional.&quot",
            "trabajo": "./recursos/trabajos/trabajo2.jpg"
        },
        {
            "idUsuario": 3,
            "nombre": "Park Jihyo",
            "perfil": "./recursos/usuarios/usuario3.jpg",
            "resena": "&quotDesde el primer contacto entendieron perfectamente lo que necesitaba. La propuesta visual que desarrollaron fue fresca, moderna y totalmente alineada con la identidad de mi marca. ¡Los recomiendo totalmente!.&quot",
            "trabajo": "./recursos/trabajos/trabajo3.jpg"
        },
        {
            "idUsuario": 4,
            "nombre": "Matt Shadows",
            "perfil": "./recursos/usuarios/usuario4.webp",
            "resena": "&quotUn equipo con una creatividad impresionante. Me ayudaron a darle una nueva vida a mi marca con un rediseño potente y coherente. Su profesionalismo y pasión por el diseño realmente marcan la diferencia.&quot",
            "trabajo": "./recursos/trabajos/trabajo4.jpg"
        },
        {
            "idUsuario": 5,
            "nombre": "Bad bunny",
            "perfil": "./recursos/usuarios/usuario5.avif",
            "resena": "&quotNunca había trabajado con una agencia tan comprometida. Supieron interpretar mi estilo y llevarlo al siguiente nivel. El resultado fue un diseño único, llamativo y totalmente auténtico. ¡Una experiencia brutal!.&quot",
            "trabajo": "./recursos/trabajos/trabajo5.png"
        }
    ]
}

console.log(objeto_usuarios)

const trabajosContenedor = document.querySelector("#trabajosContenedor")
const tarjetaTrabajos = document.querySelector(".tarjetaTrabajos")

for(i = 0; i < objeto_usuarios.usuarios.length; i++){
    const clonTarjetaTrabajo = tarjetaTrabajos.cloneNode(true)
    trabajosContenedor.appendChild(clonTarjetaTrabajo)

    const tituloCliente = clonTarjetaTrabajo.querySelector(".tituloEImagen h2")
    tituloCliente.innerHTML = objeto_usuarios.usuarios[i].nombre

    const imgPerfil = clonTarjetaTrabajo.querySelector(".imgPerfil")
    imgPerfil.src = objeto_usuarios.usuarios[i].perfil

    const textoResena = clonTarjetaTrabajo.querySelector(".textoResena p")
    let texto_modificado = objeto_usuarios.usuarios[i].resena
    const maximo_caracteres = 150
    if(objeto_usuarios.usuarios[i].resena.length > maximo_caracteres) texto_modificado = texto_modificado.slice(0, maximo_caracteres - 3) + "..."
    textoResena.innerHTML = texto_modificado

    clonTarjetaTrabajo.style.backgroundImage = "url('" + objeto_usuarios.usuarios[i].trabajo + "')"
}
tarjetaTrabajos.remove()


// Botones y contenedor de indicadores
const btnIzquierda = document.querySelector('.flechas.izquierda');
const btnDerecha = document.querySelector('.flechas.derecha');
const indicadoresCont = document.getElementById('indicadores');

// Variables
let indiceActual = 0;
let tarjetas = document.querySelectorAll('.tarjetaTrabajos');
let indicadores = [];

// Función para crear los indicadores según las "pantallas" visibles
function crearIndicadores() {
    indicadoresCont.innerHTML = ""; // Limpia puntos anteriores

    const anchoContenedor = trabajosContenedor.offsetWidth;
    const anchoTarjeta = tarjetas[0].offsetWidth + 10; // Margen aproximado
    const tarjetasPorVista = Math.floor(anchoContenedor / anchoTarjeta);
    const cantidadVistas = Math.ceil(tarjetas.length / tarjetasPorVista);

    for (let i = 0; i < cantidadVistas; i++) {
        const punto = document.createElement("div");
        punto.classList.add("indicador");
        if (i === 0) punto.classList.add("activo");
        punto.addEventListener("click", () => moverCarrusel(i));
        indicadoresCont.appendChild(punto);
    }

    indicadores = document.querySelectorAll(".indicador");
}

// Función para mover el carrusel
function moverCarrusel(indice) {
    const anchoContenedor = trabajosContenedor.offsetWidth;
    trabajosContenedor.scrollTo({
        left: anchoContenedor * indice,
        behavior: "smooth"
    });
    indiceActual = indice;
    actualizarIndicadores();
}

// Actualiza los puntitos
function actualizarIndicadores() {
    indicadores.forEach((punto, i) => {
        punto.classList.toggle("activo", i === indiceActual);
    });
}

// Botones de flechas
btnDerecha.addEventListener("click", () => {
    if (indiceActual < indicadores.length - 1) {
        moverCarrusel(indiceActual + 1);
    } else {
        moverCarrusel(0); // Reinicia
    }
});

btnIzquierda.addEventListener("click", () => {
    if (indiceActual > 0) {
        moverCarrusel(indiceActual - 1);
    } else {
        moverCarrusel(indicadores.length - 1);
    }
});

// Crear los indicadores al cargar
crearIndicadores();

// Recalcular si se redimensiona la ventana
window.addEventListener("resize", crearIndicadores);