function collectAndSubmit() {
  let email = $("#email").val();
  let password = $("#password").val();

  let formData = {
    email: email,
    password: password,
  };

  const navigate = () => {
    window.location.href = "../Profile/profile.html";
  };
  navigate();

  console.log(JSON.stringify(formData));
}
