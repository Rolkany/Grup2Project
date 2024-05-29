import React, { useState, useEffect, useCallback } from "react";
import CreatableAsyncSelect from "react-select/async-creatable";
import Select from "react-select";
//import languageServices from "./languageServices";
//import {locationSercices} from './services/locationSercices';
import { uploadFile } from "./firebase/config";
import "./NewEvent.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import { Carousel } from "react-responsive-carousel";
//import "./NewEvent.css";

const NewEvent = () => {
  const [eventPicture, setEventPicture] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventLanguage, setEventLanguage] = useState([]);
  const [eventLocation, setEventLocation] = useState([]);
  const [eventDescription, setEventDescription] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [languageOptions, setLanguageOptions] = useState();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndSetLanguages = async () => {
      try {
        const response = await fetch(
          //"http://44.208.195.232:8080/Grupo2_Ver02/languages",
          "http://localhost:8080/languages",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("reasponse.status", response.status);
        }
        const language = await response.json();
        console.log("language:", language);
        setLanguageOptions(language);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };
    fetchAndSetLanguages();
  }, []);

  const handlePictureChange = event => {
    const file = event.target.file[0];
    /*     if (files.length > 4) {
      alert("You can upload a maximum of 4 pictures.");
      return;
    } */
    setEventPicture(file);
  };

  const handleTitleChange = event => {
    setEventTitle(event.target.value);
  };

  const handleDateChange = event => {
    setEventDate(event.target.value);
  };

  const handleTypeChange = event => {
    setEventType(event.target.value);
  };

  const handleLanguageChange = selectedOption => {
    setEventLanguage(selectedOption);
  };

  const handleLocationChange = selectedOption => {
    setEventLocation(selectedOption);
  };

  const handleDescriptionChange = event => {
    setEventDescription(event.target.value);
  };

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      setError(null);

      /*       if (eventPicture.length > 4) {
        setError("No puedes subir más de 4 archivos.");
        return;
      }
 */
      setUploading(true);
      try {
        const uploadResults = await uploadFile(eventPicture);
        /* Promise.all(
          eventPicture.map(file => uploadFile(file))
        ); */
        const data = {
          eventPicture: uploadResults,
          eventTitle,
          eventDate,
          eventType,
          eventLanguage: eventLanguage.map(lang => lang.label).join(", "),
          eventLocation: eventLocation.map(loc => loc.label).join(", "),
          eventDescription,
        };
        setSubmittedData(data);
        console.log("Datos del evento:", data);
        alert("Evento creado exitosamente!");
      } catch (error) {
        console.error(error);
        setError("Fallo al subir uno o más archivos!!");
      } finally {
        setUploading(false);
      }
    },
    [
      eventPicture,
      eventTitle,
      eventDate,
      eventType,
      eventLanguage,
      eventLocation,
      eventDescription,
    ]
  );

  /*   const loadLanguages = inputValue => {
    return languageServices(inputValue);
  }; */

  /*   const loadLocations = inputValue => {
    return locationServices(inputValue);
  };
 */
  return (
    <>
      <div className="title">
        <h1>CREATE YOUR EVENT</h1>
      </div>
      <div className="boxes">
        <form
          className="form"
          onSubmit={handleSubmit}
          style={{ marginRight: "20px" }}
        >
          <div className="half">
            <div className="item">
              <h2 className="event_det">Event Details</h2>
            </div>
            <label htmlFor="file-upload" className="custom-file-upload">
              Upload Photos
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              //isMulti
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
                onChange={handleTitleChange}
              />
            </div>
            <div className="half">
              <div className="item">
                <label htmlFor="date">Event Date</label>
                <input
                  type="datetime-local"
                  id="date"
                  value={eventDate}
                  onChange={handleDateChange}
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
                onChange={handleTypeChange}
              />
            </div>
          </div>
          <div className="full">
            <div className="item custom-select__multi-value">
              <label
                className="custom-select__multi-value__label"
                htmlFor="language"
              >
                Language:
              </label>
              <Select
                classNamePrefix="custom-select"
                isMulti
                options={languageOptions}
                value={eventLanguage}
                onChange={handleLanguageChange}
              />
            </div>
          </div>
          <div className="full">
            <div className="item custom-select__multi-value">
              <label
                className="custom-select__multi-value__label"
                htmlFor="location"
              >
                Location:
              </label>
              <CreatableAsyncSelect
                classNamePrefix="custom-select"
                isMulti
                cacheOptions
                loadOptions={loadLocations}
                defaultOptions
                onChange={handleLocationChange}
              />
            </div>
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
                onChange={handleDescriptionChange}
              />
            </div>
          </div>
          <div className="action">
            <input type="reset" value="BACK" />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
        <div className="preview_box">
          <div className="wraped">
            <h2 className="ev_pw">Event Preview</h2>
            {eventPicture && (
              <div>
                <img
                  className="img-preview"
                  src={URL.createObjectURL(eventPicture)}
                  alt={`Preview ${index}`}
                />
              </div>
              /*                 ))}
              </Carousel> */
            )}

            {/*             {eventPicture.length > 0 && (
              <Carousel showThumbs={false} showStatus={false}>
                {eventPicture.map((file, index) => (
                  <div key={index}>
                    <img
                      className="img-preview"
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
                    />
                  </div>
                ))}
              </Carousel>
            )} */}
          </div>
          <div className="pr_title">
            <p>
              <strong>Event Title</strong> {eventTitle}
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
              {" "}
              <p>
                <strong>Language:</strong>{" "}
                {eventLanguage.length > 0 &&
                  eventLanguage.map(lang => lang.label).join(", ")}
              </p>
            </div>
            <div>
              {" "}
              <p>
                <strong>Location:</strong>{" "}
                {eventLocation.length > 0 &&
                  eventLocation.map(loc => loc.label).join(", ")}
              </p>
            </div>
            <div>
              {" "}
              <p>
                <strong>Description:</strong> {eventDescription}
              </p>
            </div>
          </div>
          <div className="ce_button">
            <form className="form" onSubmit={handleSubmit}>
              <div className="action">
                <input
                  type="submit"
                  value="CREATE EVENT"
                  disabled={uploading}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewEvent;
