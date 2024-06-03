import Event from "./Event";
import { useState, useEffect } from "react";
//import eventsData from "../data/events";

function MisEventos({ userId }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/events")
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error("eROR GEGET:", error));
  }, []);

  console.log(events);

  const eventfilter = events.filter(event => event.id === userId.id);

  console.log(eventfilter);
  console.log(userId);
  return (
    <>
      <main className="container-xl mt-5">
        <div className="row mt-5">
          {eventfilter.map(event => (
            <div key={event.id}>
              <Event event={event} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
export default MisEventos;
