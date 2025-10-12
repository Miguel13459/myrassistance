const informacionTarjetas = {
    tarjetas: [
        {
            imagen: "https://media.tenor.com/ocxJ2lhSSNsAAAAe/amongus-bailando.png",
            titulo: "Acompañamiento personalizado",
            descripcion: "Cada marca tiene su esencia. Trabajamos contigo de forma cercana para entender tus metas y reflejarlas en cada detalle del diseño."
        },
        {
            imagen: "https://res.cloudinary.com/teepublic/image/private/s--7XQARf5O--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_000000,e_outline:35/co_000000,e_outline:inner_fill:35/co_ffffff,e_outline:35/co_ffffff,e_outline:inner_fill:35/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1703716485/production/designs/55601191_0.jpg",
            titulo: "Diseño con propósito",
            descripcion: "Creamos identidades que comunican, inspiran y conectan. Todo lo que hacemos tiene un objetivo: que tu marca deje huella."
        },
        {
            imagen: "https://i1.sndcdn.com/artworks-Gg09Fa1y0h6iOHLg-I1eELw-t1080x1080.png",
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