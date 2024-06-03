import Event from "./Event";
import { useState, useEffect } from "react";
import eventsData from "../data/events";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  console.log(events);
  return (
    <>
      <main className="container-xl mt-5">
        <h1>Event collection</h1>
        <div className="row mt-5">
          {events.map(event => (
            <div key={event.id}>
              <Event event={event} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
export default EventList;
