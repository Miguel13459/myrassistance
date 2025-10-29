const contenidoTarjetas = {
    tarjetas: [
        {
            imagen: "https://cdn-images.dzcdn.net/images/cover/4a1f6c45e7fbd38bc19e7e73c36f11f9/0x1900-000000-80-0-0.jpg",
            titulo: "Diseño Gráfico",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus accusamus nostrum quod sequi nisi enim, cum ducimus fugit quas distinctio voluptatibus ipsum est perferendis ad omnis rem quae id."
        },
        {
            imagen: "https://cdn-images.dzcdn.net/images/cover/4a1f6c45e7fbd38bc19e7e73c36f11f9/0x1900-000000-80-0-0.jpg",
            titulo: "Branding",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus accusamus nostrum quod sequi nisi enim, cum ducimus fugit quas distinctio voluptatibus ipsum est perferendis ad omnis rem quae id."
        },
        {
            imagen: "https://cdn-images.dzcdn.net/images/cover/4a1f6c45e7fbd38bc19e7e73c36f11f9/0x1900-000000-80-0-0.jpg",
            titulo: "Web site",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus accusamus nostrum quod sequi nisi enim, cum ducimus fugit quas distinctio voluptatibus ipsum est perferendis ad omnis rem quae id."
        },
        {
            imagen: "https://cdn-images.dzcdn.net/images/cover/4a1f6c45e7fbd38bc19e7e73c36f11f9/0x1900-000000-80-0-0.jpg",
            titulo: "Publicidad anuncios",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus accusamus nostrum quod sequi nisi enim, cum ducimus fugit quas distinctio voluptatibus ipsum est perferendis ad omnis rem quae id."
        },
        {
            imagen: "https://cdn-images.dzcdn.net/images/cover/4a1f6c45e7fbd38bc19e7e73c36f11f9/0x1900-000000-80-0-0.jpg",
            titulo: "Presentaciones",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus accusamus nostrum quod sequi nisi enim, cum ducimus fugit quas distinctio voluptatibus ipsum est perferendis ad omnis rem quae id."
        },
        {
            imagen: "https://cdn-images.dzcdn.net/images/cover/4a1f6c45e7fbd38bc19e7e73c36f11f9/0x1900-000000-80-0-0.jpg",
            titulo: "Ilustraciones",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque natus accusamus nostrum quod sequi nisi enim, cum ducimus fugit quas distinctio voluptatibus ipsum est perferendis ad omnis rem quae id."
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