import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeFondo from './homeFondo.png';
import './Home.css';
import logo from './image_Vertex.png';

const Home = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img src={homeFondo} alt='fondo' className='img-fluid homeFondo' />
      </div>
      <div className="content-container">
        <img src={logo} alt="Logo" className="logo img-fluid" />
        <p className="paragraph">Welcome to Vertex</p>
        <button className="btn btn-primary">Sign Up</button>
        <button className="btn btn-secondary">Log In</button>
      </div>
    </div>
  );
}

export default Home;






















