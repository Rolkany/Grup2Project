import React from 'react';
import logo from './image_Vertex.png';
import ivanImage from './ivan.png';
import rolandImage from './roland.jpg';
import edgarImage from './edgar.jpg';
import davidImage from './david.jpg'; 
import './QuienesSomos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
history
const QuienesSomos = () => {
  return (
    <>
    <div className="container-fluid quienes-somos-container">
      <div className="row">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <div className="logo-container">
            <div className="logo-animation"></div> {/* Contenedor de la animación */}
            <img src={logo} alt="Logo" className="logo img-fluid" /> {/* Imagen del logo */}
          </div>
          <h2>¿Quiénes Somos?</h2>
          <div className="content">
            <p>
              Bienvenido a nuestra página de "¿Quiénes Somos?" En Vertex, nos apasiona promover y organizar eventos culturales de todo tipo. Desde conciertos y exposiciones de arte hasta festivales y talleres, nuestra misión es enriquecer la vida cultural de nuestra comunidad y brindar experiencias inolvidables a nuestros visitantes.
            </p>
            <p>
              Nuestro equipo está compuesto por cuatro profesionales dedicados, cada uno con una pasión única por la cultura y el entretenimiento:
            </p>
            <div className="row image-container">
              <div className="col-md-4 d-flex justify-content-center">
                <img src={ivanImage} alt="Iván" className="image" />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <p>
                  <strong>Iván:</strong> Con una vasta experiencia en gestión de eventos, Iván es nuestro coordinador principal. Su atención al detalle y su habilidad para planificar eventos complejos aseguran que cada evento se realice sin contratiempos.
                </p>
              </div>
            </div>
            <div className="row image-container">
              <div className="col-md-4 d-flex justify-content-center">
                <img src={rolandImage} alt="Roland" className="image" />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <p>
                  <strong>Roland:</strong> Especialista en marketing y comunicaciones, Roland se encarga de que cada evento tenga la visibilidad que merece. Su creatividad y habilidades de comunicación ayudan a atraer a un público diverso y entusiasta.
                </p>
              </div>
            </div>
            <div className="row image-container">
              <div className="col-md-4 d-flex justify-content-center">
                <img src={edgarImage} alt="Edgar" className="image" />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <p>
                  <strong>Edgar:</strong> Nuestro experto en tecnología y logística, Edgar maneja todos los aspectos técnicos de nuestros eventos. Su conocimiento en tecnología de eventos y soluciones innovadoras garantiza que todo funcione a la perfección.
                </p>
              </div>
            </div>
            <div className="row image-container">
              <div className="col-md-4 d-flex justify-content-center">
                <img src={davidImage} alt="David" className="image" />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <p>
                  <strong>David:</strong> Con una fuerte pasión por la cultura y las artes, David es nuestro curador y enlace comunitario. Su profundo conocimiento de las tendencias culturales y su red de contactos en la industria nos permite ofrecer una programación rica y variada.
                </p>
              </div>
            </div>
            <p>
              Juntos, nos esforzamos por crear eventos que no solo entretengan, sino que también inspiren y conecten a las personas. Acompáñanos en este viaje cultural y descubre todo lo que tenemos para ofrecer en Vertex. ¡Esperamos verte en nuestro próximo evento!
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default QuienesSomos;
