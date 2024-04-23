//Envolvemos el js en una funcion addEventListener para cargar primero la pagina, y despues obtener los recursos.
document.addEventListener('DOMContentLoaded', () => {
  //Recuperamos el usuario creado en script.js.
  const userJson = sessionStorage.getItem('createdUser');

  //Si el usuario existe, se parsea su contenido para poder utilizarlo
  if (userJson) {
    const user = JSON.parse(userJson);

    //Usamos el contenedor div del HTML(id="user-info"), para generar dinamicamente el contenido del usuario
    const userDiv = document.getElementById('user-info');
    userDiv.innerHTML = `
    <p><strong>Username:</strong> ${user.username}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Phone:</strong> ${user.phone}</p>
    <p><strong>Address:</strong> ${user.address}</p>
    `;
    //En caso de no existir el usuario creado, se pinta un mensaje de informacion al usuario
  } else {
    document.body.innerHTML = `<p>No hay informacion del usuario</p>`;
  }
});
