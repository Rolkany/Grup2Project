// EventPreview.js
import React from "react";
import "./Event.css";

function Event({ event }) {
  const {
    id,
    imgUrl,
    title,
    eventDate,
    des,
    type,
    language,
    location,
    created_By,
  } = event;

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
    <>
      <main>
        <div className="card">
          <div
            className="background"
            style={{ backgroundImage: `url(${event.imgUrl})` }}
          >
            <div className="info">
              <div>
                <h1 className="title">{title}</h1>
              </div>
              <div className="infobox">
                <div className="subTitle">
                  <h4>
                    {id} organizará un {type} en {location}.
                  </h4>
                </div>
                <div className="container">
                  <p className="description row">{des}</p>
                </div>
                <div className="dateTime">
                  <p>Fecha</p>
                  <br />
                  <p>{formattedDate}</p>
                  <p>Hora</p>
                  <br />
                  <p>{formattedTime}</p>
                </div>
                <div className="fliBox">
                  <div></div>
                  <div>
                    <p>Lugar</p>
                    <br />
                    <p>{location}</p>
                  </div>
                  <div>
                    <p>Idioma</p>
                    <br />
                    <p>{language}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Event;
