// EventPreview.js
import React from "react";
import "..style/EventPreview";

const EventPreview = ({
  eventPicture,
  eventTitle,
  eventDate,
  eventType,
  eventLanguage,
  eventLocation,
  eventDescription,
}) => (
  <div className="preview_box">
    <div className="wraped">
      <h2 className="ev_pw">Event Preview</h2>
      {eventPicture && (
        <div>
          <img
            className="img-preview"
            src={URL.createObjectURL(eventPicture)}
            alt="Preview"
          />
        </div>
      )}
    </div>
    <div className="pr_title">
      <p>
        <strong>Event Title:</strong> {eventTitle}
      </p>
    </div>
    <div>
      <p>
        <strong>Date:</strong> {eventDate}
      </p>
      <div>
        <p>
          <strong>Type:</strong> {eventType}
        </p>
      </div>
      <div>
        <p>
          <strong>Language:</strong>{" "}
          {eventLanguage.map(lang => lang.label).join(", ")}
        </p>
      </div>
      <div>
        <p>
          <strong>Location:</strong>{" "}
          {eventLocation.map(loc => loc.label).join(", ")}
        </p>
      </div>
      <div>
        <p>
          <strong>Description:</strong> {eventDescription}
        </p>
      </div>
    </div>
  </div>
);

export default EventPreview;
