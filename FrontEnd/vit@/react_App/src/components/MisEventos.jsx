import Event from "./Event";
import { useState, useEffect } from "react";
import "./MisEventos.css";

function MisEventos({ userId }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://44.208.195.232:8080/Grupo2-V3/events")
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error("ERROR GET:", error));
  }, []);

  console.log(events);

  const eventfilter = events.filter(event => event.created_By === userId.id);

  console.log(eventfilter);
  console.log(userId);
  return (
    <>
      <main className="eventsBox">
        {eventfilter.map(event => (
          <div key={event.id}>
            <Event event={event} />
          </div>
        ))}
      </main>
    </>
  );
}
export default MisEventos;
