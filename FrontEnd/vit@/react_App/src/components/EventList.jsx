import Event from "./Event";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import NewHeader from "./NewHeader";
import "./EventList.css";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://44.208.195.232:8080/Grupo2-V3/events")
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error("ERROR GET:", error));
  }, []);

  return (
    <>
      <NewHeader />
      <div className="page">
        <div className="evlisttitle">
          <h1>Event collection</h1>
        </div>
        <div className="eventsBox">
          {events.map(event => (
            <div key={event.id}>
              <Event event={event} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EventList;
