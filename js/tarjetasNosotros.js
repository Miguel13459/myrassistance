const informacionTarjetas = {
    tarjetas: [
        {
            imagen: "./recursos/img/inicio/imagenesparapaginaf-01.png",
            titulo: "Acompañamiento personalizado",
            descripcion: "Cada marca tiene su esencia. Trabajamos contigo de forma cercana para entender tus metas y reflejarlas en cada detalle del diseño."
        },
        {
            imagen: "./recursos/img/inicio/imagenesparapagina02.png",
            titulo: "Diseño con propósito",
            descripcion: "Creamos identidades que comunican, inspiran y conectan. Todo lo que hacemos tiene un objetivo: que tu marca deje huella."
        },
        {
            imagen: "./recursos/img/inicio/resultadosMedibles.png",
            titulo: "Resultados medibles",
            descripcion: "No se trata solo de estética, sino de impacto. Medimos cada estrategia para asegurarnos de que tu negocio crezca con fuerza y coherencia."
        }
    ]
}

const tarjetasNosotros = document.querySelector("#tarjetasNosotros")
const tarjeta = document.querySelector(".tarjeta")

for(i=0; i < informacionTarjetas.tarjetas.length; i++){
    let clon = tarjeta.cloneNode(true)
    tarjetasNosotros.appendChild(clon)

    const margenTarjeta = clon.querySelector(".margenTarjeta img")
    const titulo = clon.querySelector(".tituloTarjeta h3")
    const descripcion = clon.querySelector(".descripcionTarjeta p")

    margenTarjeta.src = informacionTarjetas.tarjetas[i].imagen
    titulo.innerHTML = informacionTarjetas.tarjetas[i].titulo
    descripcion.innerHTML = informacionTarjetas.tarjetas[i].descripcion
}

tarjeta.remove()