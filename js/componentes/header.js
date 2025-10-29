const header = document.querySelector("header")

header.innerHTML = `<div id="contenedorLogo">
            <a href="index.html">
                <img src="./recursos/img/logo.svg" alt="Logo Chido" id="logo">
            </a>
        </div>
        <div id="contenedorNav">
            <nav>
                <div class="botonesNav" onclick="window.location.href = 'index.html';">
                    <p>Inicio</p>
                </div>
                <div class="botonesNav" onclick="window.location.href = 'servicio.html';">
                    <p>Servicios</p>
                </div>
                <div class="botonesNav" onclick="window.location.href = 'paquetes.html';">
                    <p>Paquetes</p>
                </div>
                <div class="botonesNav" onclick="window.location.href = 'nuestrosTrabajos.html';">
                    <p>Nuestros trabajos</p>
                </div>
                <div class="botonesNav" onclick="window.location.href = 'sobreNosotros.html';">
                    <p>Sobre nosotros</p>
                </div>
            </nav>
        </div>
        <div id="botonesRegistro">
            <button id="botonInicioSesion" class="registro">Iniciar Sesión</button>
            <button id="botonRegistrarse" class="registro">Registrarse</button>
        </div>`