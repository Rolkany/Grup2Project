'use strict';

const button = document.querySelector('button');

class User {
  constructor(
    username,
    email,
    password,
    age,
    //gender,
    profession,
    hobbies,
    sports,
    description
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.age = age;
    //this.gender = gender;
    this.profession = profession;
    this.hobbies = hobbies;
    this.sports = sports;
    this.description = description;
  }
}

button.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.getElementById('username');
  const email = document.getElementById('email');
  const pass = document.getElementById('password');
  const confirmPass = document.getElementById('confirm-password');
  const age = document.getElementById('age');
  //const gender = document.getElementById('gender');
  const profession = document.getElementById('profession');
  const hobbies = document.getElementById('hobbies');
  const sports = document.getElementById('sports');
  const des = document.getElementById('description');

  //  <--Verificacion de campos-->

  //    ->Edad
  if (!validAge(age.value)) {
    console.log('Edad erronea');
    alert('Edad numerica y mayor que 0');
    return;
  }

  //    ->Password
  confirmPass.value !== pass.value
    ? ((username.value = ''),
      (email.value = ''),
      (pass.value = ''),
      (confirmPass.value = ''),
      alert('Passwords did not match'))
    : (alert('Usuario Registrado'), navigate());

  const newUser = new User(
    username.value,
    email.value,
    pass.value,
    age.value,
    //gender.value,
    profession.value,
    hobbies.value,
    sports.value,
    des.value
  );

  fetch('http://localhost:8080/users', {
    method: 'POST',
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error al guardar el usuario');
      }
      return response.json();
    })
    .then((data) => {
      console.log('Usuario guardado correctamente', data);
      window.location.href = '../Personal-info/personal-info.html';
    })
    .catch((error) => {
      console.error('Error al guardar el usuario: ', error);
      alert('Error al guardar el usuario');
    });
});

function validAge(age) {
  return !isNaN(age) && parseFloat(age) > 0;
}

// Alternativas para recuperar el formulario de usuario

// document.querySelector('form');
//     .addEventListener('submit', e => {
//         e.preventDefault();
//         const data = Object.fromEntries(
//             new FormData(e.target)
//         )
//         alert(JSON.stringify(data));

//     })
