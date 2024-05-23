import { useState } from 'react';
import Footer from './Footer';

const EditProfile = () => {
  const [imgUrl, setImgUrl] = useState(
    'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg'
  );
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [des, setDes] = useState('');

  const handleImageChange = (event) => {
    const newImgUrl = event.target.files[0];
    if (newImgUrl) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImgUrl(event.target.result);
      };
      reader.readAsDataURL(newImgUrl);
    }
  };
  const handleUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleDes = (event) => {
    setDes(event.target.value);
  };

  const handleFormEditProfile = async (event) => {
    event.preventDefault();

    const user = {
      userName,
      email,
      imgUrl,
      firstName,
      lastName,
      des,
    };

    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error('Error en el put del usuario', response.status);
      }
      const dataResponse = await response.json();
      console.log('Respuesta del servidor: ', dataResponse);
    } catch (error) {
      alert('Error en la actualizacion del usuario: ', error.message);
      console.error('Error en la actualizacion del usuario: ', error.message);
    }
  };

  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className="mb-4">
          <h1 className="title" style={{ paddingTop: '10px' }}>
            Modifica tu perfil
          </h1>
        </div>
        <div
          className="container events card p-4"
          style={{ backgroundColor: '#e6e6fa' }}
        >
          <form
            onSubmit={handleFormEditProfile}
            className="row g-3"
            id="eventForm"
          >
            <div className="col-12 d-flex flex-column align-items-center mb-3">
              <img
                id="eventPicture"
                src={imgUrl}
                alt="Icono de cargar imagen"
                className="img-thumbnail rounded-circle"
                style={{ width: '170px', height: '170px', objectFit: 'cover' }}
              />
              <input
                type="file"
                id="fileInput"
                onChange={handleImageChange}
                className="form-control mt-2"
                style={{ display: 'none' }}
              />
              <label
                htmlFor="fileInput"
                className="btn btn-outline-primary mt-2"
              >
                Cargar Imagen
              </label>
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventTitle">
                Nombre de usuario*
              </label>
              <input
                className="form-control"
                type="text"
                id="eventTitle"
                name="eventTitle"
                placeholder="Nombre"
                value={userName}
                onChange={handleUserName}
              />
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventDateTime">
                Correo electrónico*
              </label>
              <input
                className="form-control"
                type="text"
                id="eventDateTime"
                name="eventDateTime"
                placeholder="Correo electrónico"
                value={email}
                onChange={handleEmail}
              />
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventLang">
                Nombre*
              </label>
              <input
                className="form-control"
                type="text"
                id="eventLang"
                name="idioma"
                placeholder="Nombre"
                value={firstName}
                onChange={handleFirstName}
              />
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventType">
                Apellido*
              </label>
              <input
                className="form-control"
                type="text"
                id="eventType"
                name="eventType"
                placeholder="Apellido"
                value={lastName}
                onChange={handleLastName}
              />
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventDescript">
                Descríbete!*
              </label>
              <textarea
                className="form-control"
                id="eventDescript"
                name="eventDescript"
                placeholder="Descríbete!"
                rows="4"
                value={des}
                onChange={handleDes}
              ></textarea>
            </div>

            <div className="col-12">
              <p>Campos marcados con (*) son obligatorios.</p>
            </div>

            <div className="col-12 d-flex justify-content-between">
              <a className="btn btn-secondary" href="" id="volver">
                Cancelar
              </a>
              <button className="btn btn-primary" id="crear">
                Modificar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
