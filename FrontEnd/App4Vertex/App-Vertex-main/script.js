// Se crea un boton usando el id del boton del HTML
const button = document.querySelector('button');

//Se crea una clase usuario con los atributos coincidentes con las entradas de datos des del HTML
class Usuario {
  constructor(username, email, phone, address, pass) {
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.pass = pass;
  }
}

//Se crea un evento click del boton.
button.addEventListener('click', (e) => {
  //Se evita el comportamiento por defecto del navegador para evitar que se refresque la pantalla
  e.preventDefault();
  //Se crean variables para cada input del HTML.
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const pass = document.getElementById('pass');
  const address = document.getElementById('address');
  const confirmPass = document.getElementById('confirm-pass');

  //Aqui se realizan las verificaciones de campo de los datos introducidos por el usuario
  //  <--Verificaciones de campo-->
  confirmPass.value !== pass.value
    ? ((username.value = ''),
      (email.value = ''),
      (phone.value = ''),
      (address.value = ''),
      (pass.value = ''),
      (confirmPass.value = ''),
      alert('Passwords did not match'))
    : alert('Usuario Registrado');

  //Una vez superadas las verificaciones, se crea una clase a la cual se le asignan los valores obtenidos del usuario
  const user = new Usuario(
    username.value,
    email.value,
    phone.value,
    address.value,
    pass.value
  );
  console.log(user);

  //  <--TEMPORAL!-->
  //Se guarda el usuario credo en sessionStorage para poder ser mostrado en /mostrarUsuario.html. Se guarda en formato JSON
  sessionStorage.setItem('createdUser', JSON.stringify(user));
  window.location.href = '/mostrarUsuario.html';

  //Se realiza un fetch para postear el usuario creado en la base de datos.
  //   fetch('http://localhost:8080/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Error al guardar el usuario');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log('Usuario guardado correctamente', data);
  //       //  -> redireccion a otra pagina de la web    window.location.href = '';
  //     })
  //     .catch((error) => {
  //       console.error('Error al guardar el usuario', error);
  //       alert('Error al guardar el usuario');
  //     });
});
