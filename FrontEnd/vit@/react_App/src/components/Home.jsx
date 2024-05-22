import 'bootstrap/dist/css/bootstrap.min.css';
import homeFondo from './homeFondo.png';
import './Home.css';
import logo from './image_Vertex.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="image-container">
<<<<<<< HEAD
          <img src={homeFondo} alt='fondo' className='img-fluid homeFondo' />
=======
          <img src={homeFondo} alt="fondo" className="img-fluid homeFondo" />
>>>>>>> d88f873b27a8172a459214023f829498c4a05a7d
        </div>
        <div className="content-container">
          <img src={logo} alt="Logo" className="logo img-fluid" />
          <p className="paragraph">Welcome to Vertex</p>
<<<<<<< HEAD
          <Link to="/register" className="btn btn-primary">Sign Up</Link>
          <Link to="/login" className="btn btn-secondary">Log In</Link>
=======
          <Link to="/register" className="btn btn-primary">
            Sign Up
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Log In
          </Link>
>>>>>>> d88f873b27a8172a459214023f829498c4a05a7d
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

