<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfil Profesional - Alexander Gallardo</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Cabecera -->
    <header>
        <div class="header-content">
            <h1>Alexander Gallardo</h1>
            <p>Ingeniero de Ejecución en Acuicultura y Analista Programador</p>
        </div>
    </header>

    <!-- Sobre Mí -->
    <section id="sobre-mi">
        <div class="content">
            <h2>Sobre Mí</h2>
            <p>Soy un profesional con amplia experiencia en administración de información, soporte técnico, y logísticas, con un fuerte enfoque en la resolución de problemas y trabajo en equipo. Estoy orientado a la automatización y eficiencia en procesos informáticos, buscando siempre optimizar los recursos disponibles.</p>
        </div>
    </section>

    <!-- Experiencia -->
    <section id="experiencia">
        <div class="content">
            <h2>Experiencia</h2>
            <ul>
                <li><strong>Agrosuper - Fiordos, Patagonia Chilena (2007-2012)</strong>: Supervisión de labores de centro, cálculo e ingeniería en crecimiento, manejo de Excel avanzado.</li>
                <li><strong>Hospital de Quilpué (2013-2019)</strong>: Administrativo Bodega Farmacia, manejo de inventario, facturación, contacto con proveedores y logística.</li>
                <li><strong>Fabwood Cabinetry, New Jersey, USA (2021-2022)</strong>: Logística y picking, soporte IT, configuración e instalación de maquinaria.</li>
                <li><strong>Exhibitology, New York, USA (2022)</strong>: Diseño 3D, carpintería, operación de impresoras CNC.</li>
                <li><strong>Hospital de Quilpué (2023)</strong>: Encargado de bodega de abastecimiento, administración de insumos, generación de informes.</li>
            </ul>
        </div>
    </section>

    <!-- Educación -->
    <section id="educacion">
        <div class="content">
            <h2>Educación</h2>
            <ul>
                <li><strong>DUOC UC Valparaíso (2002-2006)</strong>: Ingeniería de Ejecución en Acuicultura</li>
                <li><strong>DUOC UC Viña del Mar (2013-2016)</strong>: Analista Programador Computacional</li>
            </ul>
        </div>
    </section>

    <!-- Habilidades y Cursos -->
    <section id="habilidades-cursos">
        <div class="content">
            <h2>Habilidades y Cursos</h2>
            <ul>
                <li>Automatización de procesos informáticos</li>
                <li>Administración de información y bases de datos</li>
                <li>Idiomas: Español (nativo), Inglés (avanzado), Portugués (básico)</li>
                <li>Cursos: Seguridad de la información, Compras Públicas, Excel Intermedio</li>
            </ul>
        </div>
    </section>

    <!-- Contacto -->
    <section id="contacto">
        <div class="content">
            <h2>Contacto</h2>
            <form method="post" action="contact.php">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Alexander Gallardo. Todos los derechos reservados.</p>
    </footer>

    <!-- JavaScript -->
    <script src="scripts.js"></script>
</body>
</html>
