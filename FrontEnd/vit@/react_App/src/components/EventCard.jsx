import { useState, useEffect } from 'react';

const NewEventCreate = () => {
  const [image, setImage] = useState(
    'https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg'
  );
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [title, setTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventLocation, setEventLocation] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch('http://localhost:8080/languages');
        if (!response.ok) {
          throw new Error('Error al recuperar los idiomas disponibles');
        }
        const data = await response.json();
        setLanguages(data);
        console.log(data);
      } catch (error) {
        console.error('Error al recuperar los idiomas disponibles:', error);
      }
    };
    const fetchLocations = async () => {
      try {
        const response = await fetch('http://localhost:8080/locations');
        if (!response.ok) {
          throw new Error('Error al recuperar las localizaciones disponibles');
        }
        const data = await response.json();
        setEventLocation(data);
        console.log(data);
      } catch (error) {
        console.error(
          'Error al recupera las localizaciones disponibles: ',
          error
        );
      }
    };
    fetchLanguages();
    fetchLocations();
  }, []);

  const handleImageChange = (event) => {
    const imagenNueva = event.target.files[0];
    if (imagenNueva) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(imagenNueva);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log({
      title,
      eventDate,
      selectedLanguage,
      eventType,
      selectedLocation,
      eventDescription,
    });
    setTitle('');
    setEventDate('');
    setSelectedLanguage('');
    setEventType('');
    setSelectedLocation('');
    setEventDescription('');
  };
  return (
    <div className="page-border">
      <div className="container d-flex flex-column align-items-center">
        <div className="mb-4">
          <h1 className="title">Crear Evento</h1>
        </div>
        <div
          className="container events card p-4"
          style={{ backgroundColor: '#e6e6fa' }}
        >
          <form onSubmit={handleFormSubmit} className="row g-3" id="eventForm">
            <div className="col-12 d-flex flex-column align-items-center mb-3">
              <img
                id="eventPicture"
                src={image}
                alt="Icono de cargar imagen"
                className="img-thumbnail rounded-circle"
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <input
                type="file"
                id="fileInput"
                onChange={handleImageChange}
                className="form-control mt-2"
                style={{ display: 'none' }}
              />
              <label
                htmlFor="fileInput"
                className="btn btn-outline-primary mt-2"
              >
                Cargar Imagen
              </label>
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventTitle">
                Título del evento*
              </label>
              <input
                className="form-control"
                type="text"
                id="eventTitle"
                name="eventTitle"
                placeholder="Título del evento"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventDateTime">
                Fecha y Hora del evento*
              </label>
              <input
                className="form-control"
                type="datetime-local"
                id="eventDateTime"
                name="eventDateTime"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventLang">
                Idioma*
              </label>
              <select
                className="form-control"
                id="eventLang"
                name="idioma"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="">Seleccionar idioma</option>
                {languages.map((language) => (
                  <option key={language.id} value={language.language}>
                    {language.language}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label className="form-label" htmlFor="eventLocation">
                Localizacion*
              </label>
              <select
                className="form-control"
                id="eventLocation"
                name="location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="">Seleccionar localizacion</option>
                {eventLocation.map((event) => (
                  <option key={event.id} value={event.location}>
                    {event.location}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventType">
                Tipo de evento*
              </label>
              <input
                className="form-control"
                type="text"
                id="eventType"
                name="eventType"
                placeholder="Tipo de evento"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              />
            </div>

            <div className="col-12">
              <label className="form-label" htmlFor="eventDescript">
                Descripción del evento*
              </label>
              <textarea
                className="form-control"
                id="eventDescript"
                name="eventDescript"
                placeholder="Descripción del evento"
                rows="4"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="col-12">
              <p>Campos marcados con (*) son obligatorios.</p>
            </div>

            <div className="col-12 d-flex justify-content-between">
              <a
                className="btn btn-secondary"
                href="../Profile/profile.html"
                id="volver"
              >
                Cancelar
              </a>
              <button className="btn btn-primary" id="crear">
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewEventCreate;
