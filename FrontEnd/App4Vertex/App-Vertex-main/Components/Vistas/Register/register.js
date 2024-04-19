"use strict";

let users;
const button = document.querySelector("button");

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

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
  function navigate() {
    console.log("test");
    window.location.href = "../Personal-info/personal-info.html";
  }

  confirmPassword.value !== password.value
    ? ((username.value = ""),
      (email.value = ""),
      (password.value = ""),
      (confirmPassword.value = ""),
      alert("Passwords did not match"))
    : (alert("Usuario Registrado"), navigate());
});
