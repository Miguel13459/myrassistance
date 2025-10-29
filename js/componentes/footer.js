const footer = document.querySelector("footer")

footer.innerHTML = `<div id="contenedorLogoFooter">
            <a href="index.html">
                <img src="./recursos/img/logovertical.svg" alt="Logo Chido" id="logoFooter">
            </a>

        </div>
        <div id="contenedorNavFooter">

            <div class="botonesNavFooter" onclick="window.location.href = 'servicio.html';">
                <p>Servicios</p>
            </div>
            <div class="botonesNavFooter" onclick="window.location.href = 'paquetes.html';">
                <p>Paquetes</p>
            </div>
            <div class="botonesNavFooter" onclick="window.location.href = 'nuestrosTrabajos.html';">
                <p>Nuestros trabajos</p>
            </div>
            <div class="botonesNavFooter" onclick="window.location.href = 'sobreNosotros.html';">
                <p>Sobre nosotros</p>
            </div>

        </div>
        <div id="contenedorContactosFooter">
            <p>Contactanos en el siguiente correo</p>
            <hr>
            <p>myrassistance.corporacion@gmail.com</p>
            <p>+52 656 123 4567</p>
            <p>Siguenos en nuestras redes sociales</p>
            <hr>
            <img src="./recursos/img/Facebook.svg" alt="" >
            <img src="./recursos/img/Instagram.svg" alt="" >

        </div>
        <hr>
        <div id="contenedorPoliticas">
            <p>Politica de privacidad  </p>
            <p>Politica de reembolso</p>
            <p>Terminos de servicio</p>
        </div>
`