import React, { useState, useEffect, useContext } from "react";
import { uploadEventFile } from "../firebase/config";
import { fetchAndSetLanguages } from "../services/languageServices";
import { fetchAndSetLocations } from "../services/locationServices";
import NewHeader from "./NewHeader";
import LanguageSelector from "./LanguageSelector";
import LocationSelector from "./LocationSelector";
import EventPreview from "./EventPreview";
import UserContext from "./UserContext";
import Footer from "./Footer";
import "./NewEvent.css";
import NewProfile from "./NewProfile";

const NewEvent = () => {
  const { userId } = useContext(UserContext);

  // State hooks for event details
  const [eventPicture, setEventPicture] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventLanguage, setEventLanguage] = useState([]);
  const [eventLocation, setEventLocation] = useState([]);
  const [eventDescription, setEventDescription] = useState("");

  // State hooks for options fetched from services
  const [languageOptions, setLanguageOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);

  // State hook for uploading status and error handling
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [eventCreated, setEventCreated] = useState(false); // State for event creation confirmation

  // Fetch languages and locations on component mount
  useEffect(() => {
    // Fetch and set language options
    fetchAndSetLanguages(setLanguageOptions);
    // Fetch and set location options
    fetchAndSetLocations(setLocationOptions);
  }, []);

  // Function to handle changes in language selection
  const handleLanguageChange = setEventLanguage;

  // Function to handle changes in location selection
  const handleLocationChange = setEventLocation;

  // Generic function to handle input changes
  const handleChange = (event, setStateFunc) => {
    setStateFunc(event.target.value);
  };

  // Function to handle changes in event picture upload
  const handlePictureChange = event => {
    const file = event.target.files[0];
    setEventPicture(file);
  };

  // Function to reset form fields
  const resetFormFields = () => {
    setEventPicture(null);
    setEventTitle("");
    setEventDate("");
    setEventType("");
    setEventLanguage([]);
    setEventLocation([]);
    setEventDescription("");
  };

  // Function to handle form submission
  const handleSubmit = async event => {
    event.preventDefault();
    setError(null);
    setUploading(true);

    try {
      // Upload event picture and get upload results
      const uploadResults = await uploadEventFile(eventPicture);

      // Construct event data object
      const eventData = {
        imgUrl: uploadResults,
        title: eventTitle,
        eventDate: eventDate,
        type: eventType,
        des: eventDescription,
        created_By: userId.id,
        language: eventLanguage.length > 0 ? eventLanguage[0].value : "",
        location: eventLocation.length > 0 ? eventLocation[0].value : "",
      };

      // Send event data to backend API
      const response = await fetch(
        "http://44.208.195.232:8080/Grupo2-V3/events",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        }
      );

      // Log eventData to console
      console.log("eventData:", eventData);

      // Throw error if response is not okay
      if (!response.ok) {
        throw new Error(`Error creating event: ${response.statusText}`);
      }

      // Parse response data
      const data = await response.json();
      console.log("Response Data: ", data);

      // Set event created confirmation to true
      setEventCreated(true);

      // Reset form fields after successful submission
      resetFormFields();

      // Show alert for successful event creation
      alert("Event created successfully!");
    } catch (error) {
      // Log and set error message on error
      console.error("Error:", error);
      setError("Error creating event");
    } finally {
      // Set uploading to false after completion
      setUploading(false);
    }
  };

  return (
    <>
      {eventCreated ? (
        <NewProfile />
      ) : (
        <>
          <NewHeader />
          <div className="titleBox">
            <h1 className="cve">CREA TU EVENTO</h1>
          </div>
          <div className="boxes">
            <form
              className="cevent_form"
              onSubmit={handleSubmit}
              style={{ marginRight: "20px" }}
            >
              <div className="half">
                <div className="item">
                  <h2 className="event_det">Event Details</h2>
                </div>
                <label htmlFor="file-upload" className="custom-file-upload">
                  Upload Picture
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePictureChange}
                  style={{ display: "none" }}
                  disabled={uploading}
                />
              </div>
              <div className="half">
                <div className="item">
                  <label htmlFor="title">Event Title:</label>
                  <input
                    type="text"
                    id="title"
                    value={eventTitle}
                    onChange={e => handleChange(e, setEventTitle)}
                  />
                </div>
                <div className="half">
                  <div className="item">
                    <label htmlFor="date">Event Date</label>
                    <input
                      type="datetime-local"
                      id="date"
                      value={eventDate}
                      onChange={e => handleChange(e, setEventDate)}
                    />
                  </div>
                </div>
              </div>
              <div className="full">
                <div className="item">
                  <label htmlFor="type">Event Type</label>
                  <input
                    type="text"
                    id="type"
                    value={eventType}
                    onChange={e => handleChange(e, setEventType)}
                  />
                </div>
              </div>
              <div className="full">
                <LanguageSelector
                  options={languageOptions}
                  value={eventLanguage}
                  onChange={handleLanguageChange}
                />
              </div>
              <div className="full">
                <LocationSelector
                  options={locationOptions}
                  value={eventLocation}
                  onChange={handleLocationChange}
                />
              </div>
              <div className="full">
                <div className="item">
                  <label className="taxtlab" htmlFor="description">
                    Description:
                  </label>
                  <textarea
                    type="text"
                    id="description"
                    value={eventDescription}
                    onChange={e => handleChange(e, setEventDescription)}
                  />
                </div>
              </div>
              <div className="action">
                <input
                  type="submit"
                  value="CREATE EVENT"
                  disabled={uploading}
                />
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </form>

            {/* Render the event preview component */}
            <EventPreview
              eventPicture={eventPicture}
              eventTitle={eventTitle}
              eventDate={eventDate}
              eventType={eventType}
              eventLanguage={eventLanguage}
              eventLocation={eventLocation}
              eventDescription={eventDescription}
            />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default NewEvent;
