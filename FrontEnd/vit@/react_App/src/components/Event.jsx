// EventPreview.js
import React from "react";
import "./Event";

function Event({ event }) {
  const { imgUrl, title, eventDate, des, type, language, location } = event;

  // Función para formatear la fecha y hora
  const formatDate = dateTimeString => {
    const eventDateTime = new Date(dateTimeString);
    const formattedDate = eventDateTime.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = eventDateTime.toLocaleTimeString("es-ES", {
      hour: "numeric",
      minute: "numeric",
    });
    return { formattedDate, formattedTime };
  };

  // Obtener la fecha y hora formateadas
  const { formattedDate, formattedTime } = formatDate(eventDate);

  return (
    <div className="cardEvent">
      <div
        className="backgroundEvent"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="info">
          <div>
            <h1 className="title">{title}</h1>
          </div>
          <div className="infobox">
            <div className="subTitle">
              <h4>
                Se organizará un {type} en {location}.
              </h4>
            </div>
            <div className="container">
              <p className="description row">{des}</p>
            </div>
            <div className="dateTime">
              <p>Fecha De Evento: {formattedDate}</p>
              <p>Hora De Evento: {formattedTime}</p>
            </div>
            <div className="fliBox">
              <div>
                <p>Lugar</p>
                <p>{location}</p>
              </div>
              <div>
                <p>Idioma</p>
                <p>{language}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
