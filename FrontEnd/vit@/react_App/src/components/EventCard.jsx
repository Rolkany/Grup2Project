<<<<<<< HEAD
import { useContext, useState } from 'react';
import './EventCard.css';
import UserContext from './UserContext';
=======
import { useState } from "react";
import "./EventCard.css";
import logo from "./image_Vertex.png";
>>>>>>> origin/main

const EventCard = () => {
  const [image, setImage] = useState(
    "https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
  );
  const [title, setTitle] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [lang, setLang] = useState('');
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [des, setDes] = useState('');
  const { userId } = useContext(UserContext);

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

  const handleFormSubmit = async () => {};

  return (
    <div className="event_container">
      <div className="container events card p-4">
        <form onSubmit={handleFormSubmit} action="" id="eventForm">
          <div>
            <h1 className="title">CRETE YOUR EVENT</h1>
          </div>
          <div className="">
            <img
              id="eventPicture"
              src={image}
              alt="Icono de cargar imagen"
              className="img-thumbnail"
              style={{
                width: "160px",
                height: "160px",
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
            <label htmlFor="fileInput" className="btn btn-outline-primary mt-2">
              Cargar Imagen
            </label>
          </div>

<<<<<<< HEAD
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
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
                value={lang}
                onChange={(e) => setLang(e.target.value)}
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
                value={type}
                onChange={(e) => setType(e.target.value)}
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
                value={des}
                onChange={(e) => setDes(e.target.value)}
              ></textarea>
            </div>
=======
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
>>>>>>> origin/main

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
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
};

export default EventCard;
