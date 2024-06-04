import Event from "./Event";
import { useState, useEffect } from "react";
import "./Event.css";
import "./EventList.css";
import Footer from "./Footer";
import NewHeader from "./NewHeader";
//import eventsData from "../data/events";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/events")
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
