const jsonEnlace = "https://ic2o8act3c.execute-api.us-east-1.amazonaws.com/pagina-de-inicio-eventos/pagina-de-inicio-eventos";

async function cargarEventos() {
    const respuesta = await fetch(jsonEnlace);
    const eventos = await respuesta.json();
    const eventosContainer = document.getElementById("eventos-contenido");

    eventos.forEach((evento, index) => {
        const valoracion = [4.5, 3.9, 4.6, 3.7, 4.5][index]; 

        const estrellasHTML = Array.from({ length: 5 }, (_, i) => {
            const faClass = i + 1 <= valoracion ? 'fa-star' : 'fa-star-o';
            return `<i class="fa ${faClass}" style="color: #FFD43B;"></i>`;
        }).join('');

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
                                <a href="../vistaEventos.html" class="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        eventosContainer.innerHTML += eventoHTML;
    });
}

cargarEventos();