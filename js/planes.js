const planesInformacion = {
    planes: [
        {
            id: 1,
            iconoTitulo: "https://www.svgrepo.com/show/400683/rocket.svg",
            titulo: "Paquete inicial",
            descripcion: "Ideal para quienes dan sus primeros pasos digitales. Empieza con una identidad sólida y profesional desde el día uno.",
            precio: 499.00,
            descuento: "+1 mes gratis",
            servicios: [
                "Branding y logos",
                "Ilustraciones",
                "Correo electrónico",
                "Producto o diseño de paquetes",
                "Diseño o impresión",
                "Contenido en redes sociales",
                "Servicios adicionales de diseño"
            ],
            gestion: [
                "Un proyecto a la vez",
                "Autogestionado",
                "Director de arte",
                "Encargado de control de calidad"
            ]
        },
        {
            id: 2,
            iconoTitulo: "https://www.svgrepo.com/show/422994/quality-premium-certificate.svg",
            titulo: "Paquete inicial",
            descripcion: "Lleva tu marca al siguiente nivel con diseños estratégicos y herramientas que potencian tu presencia en línea.",
            precio: 995.00,
            descuento: "+2 mes gratis",
            servicios: [
                "Todo sobre el negocio",
                "Canva templates",
                "Infografías",
                "Anuncios creativos",
                "Ilustraciones hechas a mano",
                "Presentaciones y pich decks",
                "Diseño web completo"
            ],
            gestion: [
                "Un proyecto a la vez",
                "Autogestionado",
                "Director de arte",
                "Encargado de control de calidad"
            ]
        },
        {
            id: 3,
            iconoTitulo: "https://www.svgrepo.com/show/43150/store.svg",
            titulo: "Paquete inicial",
            descripcion: "Maximiza tu alcance con soluciones completas de marketing, contenido y desarrollo web para destacar en el mundo digital.",
            precio: 1497.00,
            descuento: "+3 mes gratis",
            servicios: [
                "Todo sobre marketing y anuncios",
                "Animaciones",
                "Motion grafics",
                "Creación de reels y shorts para redes",
                "Instagram/Facebook reels",
                "Tik Tok y Youtube shorts",
                "Creción de sitio web completo"
            ],
            gestion: [
                "Un proyecto a la vez",
                "Autogestionado",
                "Director de arte",
                "Encargado de control de calidad"
            ]
        },
    ]
}

const tarjetasPlanes = document.querySelector("#tarjetasPlanes")
const tarjetaPlan = document.querySelector(".tarjetaPlan")

for(i=0; i < planesInformacion.planes.length; i++){
    let clon = tarjetaPlan.cloneNode(true)
    tarjetasPlanes.appendChild(clon)

    const iconoNombrePlan = clon.querySelector(".nombrePlan img")
    const NombrePlan = clon.querySelector(".nombrePlan h4")
    const mensajePlan = clon.querySelector(".mensajePlan p")
    const numeroPrecio = clon.querySelector(".numeroPrecio")
    const descuentoPlan = clon.querySelector(".descuentoPlan p")

    iconoNombrePlan.src = planesInformacion.planes[i].iconoTitulo
    NombrePlan.innerHTML = planesInformacion.planes[i].titulo
    mensajePlan.innerHTML = planesInformacion.planes[i].descripcion
    numeroPrecio.innerHTML = planesInformacion.planes[i].precio
    descuentoPlan.innerHTML = planesInformacion.planes[i].descuento

    const bloqueServicios = clon.querySelector(".bloqueServicios")
    const servicio = clon.querySelector(".servicio")
    for(j=0; j < planesInformacion.planes[i].servicios.length; j++){
        let clonServicio = servicio.cloneNode(true)
        bloqueServicios.appendChild(clonServicio)

        const iconoServicio = clonServicio.querySelector(".servicio img")
        const textoServicio = clonServicio.querySelector(".servicio p")

        iconoServicio.src = "https://www.svgrepo.com/show/532154/check.svg"
        textoServicio.innerHTML = planesInformacion.planes[i].servicios[j]
    }
    servicio.remove()

    const bloqueGestion = clon.querySelector(".bloqueGestion")
    const gestion = clon.querySelector(".gestion")
    for(j=0; j < planesInformacion.planes[i].gestion.length; j++){
        let clonGestion = gestion.cloneNode(true)
        bloqueGestion.appendChild(clonGestion)

        const iconoGestion = clonGestion.querySelector(".gestion img")
        const textoGestion = clonGestion.querySelector(".gestion p")

        iconoGestion.src = "https://www.svgrepo.com/show/532154/check.svg"
        textoGestion.innerHTML = planesInformacion.planes[i].gestion[j]
    }
    gestion.remove()
}

tarjetaPlan.remove()