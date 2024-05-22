<<<<<<< HEAD
import { useState } from 'react';
import './EventCard.css';
=======
import { useState } from "react";
import "./EventCard.css";
>>>>>>> origin/main

const EventCard = () => {
  const [image, setImage] = useState(
    "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
  );

  const handleImageChange = event => {
    const imagenNueva = event.target.files[0];
    if (imagenNueva) {
      const reader = new FileReader();
      reader.onload = e => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(imagenNueva);
    }
  };

  const handleFormSubmit = () => {};

  return (
    <div
      className="bg-cover font-sans bg-no-repeat relative z-0 bg-center h-screen "
      style={{
        backgroundImage: `url(${"https://pixabay.com/illustrations/woman-line-reptile-creativity-8765199/"})`,
      }}
    >
      <div className="container d-flex flex-column align-items-center">
        <div className="mb-4">
          <h1 className="title">Crear Evento</h1>
        </div>
        <div className="container events card p-4">
          <form onSubmit={handleFormSubmit} className="row g-3" id="eventForm">
            <div className="col-12 d-flex flex-column align-items-center mb-3">
              <img
                id="eventPicture"
                src={image}
                alt="Icono de cargar imagen"
                className="img-thumbnail"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                }}
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
              <label className="form-label" htmlFor="eventTitle">
                Título del evento*
              </label>
              <input
                className="form-control"
                type="text"
                id="eventTitle"
                name="eventTitle"
                placeholder="Título del evento"
              />
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventDateTime">
                Fecha y Hora del evento*
              </label>
              <input
                className="form-control"
                type="datetime-local"
                id="eventDateTime"
                name="eventDateTime"
              />
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventLang">
                Idioma*
              </label>
              <input
                className="form-control"
                type="text"
                id="eventLang"
                name="idioma"
                placeholder="Idioma"
              />
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventType">
                Tipo de evento*
              </label>
              <input
                className="form-control"
                type="text"
                id="eventType"
                name="eventType"
                placeholder="Tipo de evento"
              />
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventLocation">
                Lugar*
              </label>
              <input
                className="form-control"
                type="text"
                id="eventLocation"
                name="eventLocation"
                placeholder="Lugar del evento"
              />
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventDescript">
                Descripción del evento*
              </label>
              <textarea
                className="form-control"
                id="eventDescript"
                name="eventDescript"
                placeholder="Descripción del evento"
                rows="4"
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
                Event Preview
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
