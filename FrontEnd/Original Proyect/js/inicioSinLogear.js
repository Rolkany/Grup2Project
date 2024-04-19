
    // ENLACE DEL JSON PARA EVENTOS EN LA PÁGINA DE INICIO
    const jsonEnlace = "https://ic2o8act3c.execute-api.us-east-1.amazonaws.com/pagina-de-inicio-eventos/pagina-de-inicio-eventos";

    // FUNCION ASINCRONA PARA CARGAR EVENTOS EN LA PÁGINA DE INICIO
    async function cargarEventos() {
        // OBTENER RESPUESTA DEL FETCH AL JSON DE EVENTOS
        const respuesta = await fetch(jsonEnlace);
        // PARSEAR LA RESPUESTA A FORMATO JSON
        const eventos = await respuesta.json();
        // OBTENER CONTENEDOR DE EVENTOS EN EL DOM
        const eventosContainer = document.getElementById("eventos-contenido");

        // ITERAR A TRAVÉS DE CADA EVENTO Y GENERAR HTML DINÁMICO
        eventos.forEach((evento, index) => {
            // VALORACIÓN SERÁ UN ARRAY CON LAS VALORACIONES (TEMPORAL PARA PRUEBAS)
            const valoracion = [4.5, 3.9, 4.6, 3.7, 4.5][index];

            // GENERAR HTML PARA LAS ESTRELLAS DE VALORACIÓN
            const estrellasHTML = Array.from({ length: 5 }, (_, i) => {
                const faClass = i + 1 <= valoracion ? 'fa-star' : 'fa-star-o';
                return `<i class="fa ${faClass}" style="color: #FFD43B;"></i>`;
            }).join('');

            // CONCATENAR VALORACIÓN Y ESTRELLAS AL HTML DEL EVENTO
            const valoracionHTML = `${valoracion.toFixed(1)} ${estrellasHTML}`;

            const eventoHTML = `
                <div class="col-md-12 mb-4">
                    <div class="card">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="${evento.imagen}" class="card-img img-fluid" alt="${evento.titulo_imagen}" style="height: 250px; object-fit: cover;">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${evento.titulo_imagen}</h5>
                                    <p class="card-text">${evento.descripcion_breve}</p>
                                    <div class="valoracion">${valoracionHTML}</div>
                                    <a href="evento${index + 1}.html" class="btn btn-primary">Ver más</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // AGREGAR HTML DEL EVENTO AL CONTENEDOR DE EVENTOS
            eventosContainer.innerHTML += eventoHTML;
        });
    }

    // LLAMAR A LA FUNCIÓN PARA CARGAR EVENTOS CUANDO SE CARGA LA PÁGINA
    cargarEventos();

    // EVENTO AL CARGAR EL DOM
    document.addEventListener("DOMContentLoaded", function () {
        // OBTENER CONTENEDOR DE EVENTOS Y NOTICIAS EN EL DOM
        const eventosContenedor = document.getElementById("eventos-contenido");
        const noticiasContenedor = document.getElementById("noticias-contenido");

        // URL PARA OBTENER JSON DE EVENTOS Y NOTICIAS
        const urlEventosJson = "https://k8lkfryeq4.execute-api.us-east-1.amazonaws.com/eventos/eventos";
        const urlNoticiasJson = "https://k8lkfryeq4.execute-api.us-east-1.amazonaws.com/noticias-recientes/noticias-recientes";

        // FUNCION PARA MOSTRAR EVENTOS
        function mostrarEventos() {
            // FETCH AL JSON DE EVENTOS
            fetch(urlEventosJson)
                .then(response => response.json())
                .then(data => {
                    // ITERAR A TRAVÉS DE LOS EVENTOS Y GENERAR BOTONES "VER MÁS"
                    data.forEach(evento => {
                        const eventoHTML = `
                            <div class="card mb-3">
                                <button class="btn btn-primary ver-mas-btn" data-evento-id="${evento.id}">Ver Más</button>
                            </div>
                        `;

                        // AGREGAR HTML DEL EVENTO AL CONTENEDOR DE EVENTOS
                        eventosContenedor.innerHTML += eventoHTML;
                    });

                    // AGREGAR EVENTLISTENER A CADA BOTÓN "VER MÁS"
                    const verMasButtons = document.querySelectorAll('.ver-mas-btn');
                    verMasButtons.forEach(button => {
                        button.addEventListener('click', () => {
                            // OBTENER ID DEL EVENTO Y REDIRIGIR A LA PÁGINA CORRESPONDIENTE
                            const eventoId = button.getAttribute('data-evento-id');
                            window.location.href = `theproducers.html?evento=${eventoId}`;
                        });
                    });
                })
                .catch(error => console.error("Error al obtener eventos:", error));
        }

        // FUNCION PARA MOSTRAR NOTICIAS
        function mostrarNoticias() {
            // FETCH AL JSON DE NOTICIAS
            fetch(urlNoticiasJson)
                .then(response => response.json())
                .then(data => {
                    // OBTENER LAS DOS PRIMERAS NOTICIAS
                    const dosNoticias = data.slice(0, 2);

                    // ITERAR A TRAVÉS DE LAS NOTICIAS Y GENERAR HTML
                    dosNoticias.forEach(noticia => {
                        const noticiaHTML = `
                            <div class="card mb-3">
                                <img src="${noticia.imagen || 'ruta_por_defecto_si_no_hay_imagen'}" class="card-img-top" alt="Imagen de la Noticia">
                                <div class="card-body">
                                    <h5 class="card-title">${noticia.titulo_imagen || 'Título no disponible'}</h5>
                                    <p class="card-text">${noticia.descripcion_breve || 'Descripción no disponible'}</p>
                                    <p>${noticia.fecha || noticia.tiempo || 'Fecha no disponible'}</p>
                                </div>
                            </div>
                        `;

                        // AGREGAR HTML DE LA NOTICIA AL CONTENEDOR DE NOTICIAS
                        noticiasContenedor.innerHTML += noticiaHTML;
                    });
                })
                .catch(error => console.error("Error al obtener noticias:", error));
        }

        // LLAMAR A LAS FUNCIONES PARA MOSTRAR EVENTOS Y NOTICIAS AL CARGAR EL DOM
        mostrarEventos();
        mostrarNoticias();
    });

