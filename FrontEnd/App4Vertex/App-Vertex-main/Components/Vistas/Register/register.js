'use strict';

let users;
const button = document.querySelector('button');

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');

  //  <--Verificacion -->
  //  <--Verificacion de campos-->

  const newUser = new User(username.value, email.value, password.value);
  console.log(newUser);
  // if(confirmPassword.value !== password.value){
  //     username.value = '';
  //     email.value = '';
  //     password.value = '';
  //     confirmPassword.value = '';
  //     alert('Passwords did not match')
  // }else{
  //     alert('Usuario Registrado')
  // }

  // Si incluimos la redireccion en el fetch, este bloque no es necesario
  function navigate() {
    console.log('test');
    window.location.href = '../Personal-info/personal-info.html';
  }

  confirmPassword.value !== password.value
    ? ((username.value = ''),
      (email.value = ''),
      (password.value = ''),
      (confirmPassword.value = ''),
      alert('Passwords did not match'))
    : (alert('Usuario Registrado'), navigate());
});

// La verificacion no se produce ya que esta despues de crearse el objeto User. Deberiamos colocar la verificacion de password antes de crearse el objeto.

// Realizar una solicitud fetch para guardar el usuario en la base de datos
fetch('http://localhost:8080/users', {
  method: 'POST', // Método HTTP POST para enviar datos
  headers: {
    'Content-Type': 'post_de_newUser/json', // Tipo de contenido JSON
  },
  body: JSON.stringify(newUser), // el objeto que creamos se passa a JSON y se envia en el body de la solicitud
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error al guardar el usuario');
    }
    return response.json(); // Devolver la respuesta como JSON
  })
  .then((data) => {
    console.log('Usuario guardado correctamente:', data);
    window.location.href = '../Personal-info/personal-info.html'; // Redirigimos la pagina a personal-info
  })
  .catch((error) => {
    console.error('Error al guardar el usuario:', error);
    alert(
      'Ocurrió un error al guardar el usuario. Por favor, inténtalo de nuevo.'
    );
  });

//Creo que el modelo sencillo del fetch, extendible en estructura al resto de fetch que tendremos que hacer,  se ajusta de momento a nuestras necesidades; no estoy del todo seguro en el tema de añadir aqui el fetch, o hacerlo despues de pasar por personal-info, recogiendo asi en un fetch los dos objetos(newUser y Personal info). Tenemos que tener en cuenta de que estamos creando dos objetos que se refieren al mismo usuario, y eso puede ser conflictivo, al no ir todos los datos en un mismo objeto.
//La mejor opcion sera fusionar el registro y el personal-info creo, ya que si no tendremos que almacenar en el localStorage, los datos de newUser para luego recuperarlos al crear personalInfo. entonces pasamos como atributo de la clase User el personalInfo.
