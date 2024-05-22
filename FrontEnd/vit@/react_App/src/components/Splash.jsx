import React from 'react';
import logo from './image_Vertex.png';
import './Splash.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Splash = () => {
  return (
    <>
    <div className="splash-screen">
      <div className='logo-container'>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div id="cargando-container">
        <div className="fire-spinner" role="status">
          <span className="visually-hidden">Cargando</span>
        </div>
      </div>
    </div>
    </>
  );
}

export default Splash;
