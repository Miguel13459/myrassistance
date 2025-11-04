const contenidoTarjetas = {
    tarjetas: [
        {
            imagen: "./recursos/servicios/imagenesparalapagina-03.png",
            titulo: "Diseño Gráfico",
            descripcion: "El diseño gráfico es la base de toda comunicación visual. En [Nombre de tu agencia], creamos piezas que no solo se ven bien, sino que transmiten mensajes claros y memorables."
        },
        {
            imagen: "./recursos/servicios/imagenesparalapagina-04.png",
            titulo: "Branding",
            descripcion: "Tu marca es mucho más que un logo: es lo que la gente siente cuando piensa en ti. Creamos identidades visuales únicas, coherentes y auténticas que reflejan la esencia de tu negocio."
        },
        {
            imagen: "./recursos/servicios/imagenesparalapagina-05.png",
            titulo: "Web site",
            descripcion: "Diseñamos sitios web funcionales, modernos y adaptados a cada dispositivo. Nos enfocamos en crear experiencias digitales intuitivas que conecten con tus usuarios y refuercen tu identidad de marca."
        },
        {
            imagen: "./recursos/servicios/imagenesparalapagina-08.png",
            titulo: "Publicidad anuncios",
            descripcion: "Transformamos ideas en campañas visuales que captan la atención y generan resultados. Ya sea en redes sociales, medios impresos o digitales, diseñamos anuncios que comunican de forma clara, impactante y con un toque creativo que diferencia tu marca del resto."
        },
        {
            imagen: "./recursos/servicios/imagenesparalapagina-06.png",
            titulo: "Presentaciones",
            descripcion: "Creamos presentaciones visualmente potentes y profesionales que potencian tu mensaje, mantienen la atención del público y elevan la imagen de tu marca. Perfectas para conferencias, propuestas o lanzamientos."
        },
        {
            imagen: "./recursos/servicios/imagenesparalapagina-07.png",
            titulo: "Ilustraciones",
            descripcion: "Desde personajes y escenas conceptuales hasta gráficos editoriales y elementos decorativos, nuestras ilustraciones aportan emoción, estilo y una identidad visual inconfundible a cada proyecto."
        }
    ]
}

const tarjetasServicios = document.querySelector("#tarjetasServicios")
const tarjetaServicio = document.querySelector(".tarjetaServicio")

for(i = 0; i < contenidoTarjetas.tarjetas.length; i++){
    let clonTarjetaServicio = tarjetaServicio.cloneNode(true)
    tarjetasServicios.appendChild(clonTarjetaServicio)

    const imgServicio = clonTarjetaServicio.querySelector(".imgServicio")
    imgServicio.src = contenidoTarjetas.tarjetas[i].imagen

    const tituloServicio = clonTarjetaServicio.querySelector(".tituloServicio h3")
    tituloServicio.innerHTML = contenidoTarjetas.tarjetas[i].titulo

    const textoServicio = clonTarjetaServicio.querySelector(".textoServicio p")
    textoServicio.innerHTML = contenidoTarjetas.tarjetas[i].descripcion
}
tarjetaServicio.remove()