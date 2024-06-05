import { useState, useEffect } from "react";
import { useEventContext } from "./EventContext";

const EventSender = ({ eventData, onSuccess, onError }) => {
  const [uploading, setUploading] = useState(false);
  const { events, setEvents } = useEventContext();

  const sendEvent = async () => {
    setUploading(true);
    try {
      const response = await fetch("http://44.208.195.232:8080/Grupo2-V3/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error(`Error creating event: ${response.statusText}`);
      }

      const data = await response.json();
      onSuccess(data); // Llama a la función onSuccess con los datos de respuesta
      fetchEvents(); // Fetch events again after adding a new one
    } catch (error) {
      console.error("Error:", error);
      onError("Error creating event");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <button onClick={sendEvent} disabled={uploading}>
        CREATE EVENT
      </button>
      {uploading && <p>Uploading...</p>}
    </div>
  );
};

export default EventSender;
