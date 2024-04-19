function iniciarSesion() {
    // Obtener los valores del usuario y la contraseña
    var usuario = document.getElementById("exampleInputEmail1").value;
    var contrasena = document.getElementById("exampleInputPassword1").value;

    // Validar los valores
    if (usuario === "jose1" && contrasena === "contra") {
      // Redirigir a la página "iniciologeado.html"
      window.location.href = "iniciologeado.html";
    } else {
      // Mostrar un mensaje de error si la contraseña es incorrecta
      alert("Usuario o contraseña incorrecta");
    }
  }