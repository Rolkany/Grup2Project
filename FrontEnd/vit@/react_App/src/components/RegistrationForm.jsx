<<<<<<< HEAD
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
=======
import { useState } from "react";
>>>>>>> origin/HEAD

const NewRegistrationUser = () => {
  //const { userId } = useContext(UserContext);
  const [image, setImage] = useState(
    "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
  );
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [des, setDes] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [points, setPoints] = useState("");

  const handleImageChange = e => {
    const imagenNueva = e.target.files[0];
    if (imagenNueva) {
      const reader = new FileReader();
      reader.onload = e => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(imagenNueva);
    }
  };
  const newUser = {
    userName,
    email,
    pass,
    image,
    firstName,
    lastName,
    age,
    des,
    phone,
    address,
    points,
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) {
        throw new Error("Fallo en el proceso de registro: ", response.status);
      }

      const dataResponse = await response.json();

      const user = dataResponse;
      console.log("la respuesta es: ", user);
    } catch (error) {
      alert("Error en el proceso de login: " + error.message);
      console.error("Error en el login: ", error.message);
    }
  };
  return (
    <div className="page-border">
      <div className="container d-flex flex-column align-items-center">
        <div className="mb-4">
          <h1 className="title">Crear Usuario</h1>
        </div>
        <div
          className="container events card p-4"
          style={{ backgroundColor: "#e6e6fa" }}
        >
          <form onSubmit={handleFormSubmit} className="row g-3" id="eventForm">
            <div className="col-12 d-flex flex-column align-items-center mb-3">
              <img
                id="eventPicture"
                src={image}
                alt="Icono de cargar imagen"
                className="img-thumbnail rounded-circle"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <input
                type="file"
                id="fileInput"
                onChange={handleImageChange}
                className="form-control mt-2"
                style={{ display: "none" }}
              />
              <label
                htmlFor="fileInput"
                className="btn btn-outline-primary mt-2"
              >
                Cargar Imagen
              </label>
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="username">
                Nombre de usuario*
              </label>
              <input
                className="form-control"
                type="text"
                id="username"
                name="username"
                placeholder="Nombre de usuario"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="email">
                Correo electrónico*
              </label>
              <input
                className="form-control"
                type="text"
                id="email"
                name="email"
                placeholder="Correo electronico"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="password">
                Contraseña*
              </label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                value={pass}
                onChange={e => setPass(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="confirm-password">
                Repetir contraseña*
              </label>
              <input
                className="form-control"
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Correo electronico"
              />
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="firstname">
                Nombre*
              </label>
              <input
                className="form-control"
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Nombre"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="lastname">
                Apellido*
              </label>
              <input
                className="form-control"
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Apellido"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="address">
                Direccion*
              </label>
              <input
                className="form-control"
                type="text"
                id="address"
                name="address"
                placeholder="Direccion"
                value={address}
                onChange={e => setAddress(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="age">
                Edad*
              </label>
              <input
                className="form-control"
                type="number"
                id="age"
                name="age"
                placeholder="Edad"
                value={age}
                onChange={e => setAge(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="phone">
                Telefono*
              </label>
              <input
                className="form-control"
                type="number"
                id="number"
                name="number"
                placeholder="Telefono"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="points">
                Puntos iniciales*
              </label>
              <input
                className="form-control"
                type="number"
                id="points"
                name="points"
                placeholder="Puntos iniciales"
                value={points}
                onChange={e => setPoints(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="userdes">
                Describete!*
              </label>
              <textarea
                className="form-control"
                id="userdes"
                name="userdes"
                placeholder="Describete!"
                rows="4"
                value={des}
                onChange={e => setDes(e.target.value)}
              ></textarea>
            </div>

            <div className="col-12">
              <p>Campos marcados con (*) son obligatorios.</p>
            </div>

            <div className="col-12 d-flex justify-content-between">
              <a
                className="btn btn-secondary"
                href="../Profile/profile.html"
                id="volver"
              >
                Cancelar
              </a>
              <button className="btn btn-primary" id="crear">
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewRegistrationUser;
