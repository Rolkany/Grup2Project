document.addEventListener('DOMContentLoaded', function () {
    // URL de la API
    var apiUrl = 'https://40b4yl5a96.execute-api.us-east-1.amazonaws.com/usuarios/perfiles';

    // Selecciona los elementos HTML por su ID
    var nombreUsuarioElement = document.getElementById('nombreUsuarioInfo');
    var nombreUsuarioElementP = document.getElementById('nombreUsuarioP');

    
    var emailUsuarioElement = document.getElementById('emailUsuarioInfo');
    var telefonoUsuarioElement = document.getElementById('telefonoUsuarioInfo');

    // Realiza la solicitud fetch a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Verifica si hay datos y actualiza los elementos HTML
            if (data && data.length > 0) {
                var primerUsuario = data[0];
                nombreUsuarioElementP.textContent = primerUsuario.nombre_usuario;  
                nombreUsuarioElement.textContent = primerUsuario.nombre_usuario;
                emailUsuarioElement.textContent = primerUsuario.email;
                telefonoUsuarioElement.textContent = primerUsuario.telefono;
            }
        })
        .catch(error => console.error('Error al obtener datos desde la API:', error));
});