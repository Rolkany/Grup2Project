import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';
import logo from './image_Vertex.png';
import { useContext, useState } from 'react';
import UserContext from './UserContext';

import './NewLogin.css';
import NewProfile from './NewProfile';
import Footer from './Footer';

const NewLogin = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const { setUserId } = useContext(UserContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userLogin = { email, pass };

    try {
      const response = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userLogin),
      });
      if (!response.ok) {
        throw new Error('Fallo en el proceso de login', response.status);
      }

      const dataResponse = await response.json();
      console.log('La respuesta es: ', dataResponse);
      const userId = dataResponse;
      setUserId(userId);
      setLoggedIn(true);
    } catch (error) {
      alert('Error en el proceso de login: ' + error.message);
      console.error('Error en el login: ', error.message);
    }

    console.log('email: ', email);
    console.log('pass: ', pass);
    console.log(userLogin);

    setEmail('');
    setPass('');
  };
  return (
    <>
      {loggedIn ? (
        <NewProfile />
      ) : (
        <MDBContainer className="my-5 gradient-form">
          <MDBRow>
            <MDBCol col="6" className="mb-5">
              <div className="d-flex flex-column ms-5">
                <div className="text-center">
                  <img src={logo} style={{ width: '100 px' }} alt="logo" />
                  <h4 className="mt-1 mb-5 pb-1">Vertex</h4>
                </div>

                <p>Accede a tu cuenta</p>

                <form onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Correo electrónico"
                    id="form1"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Contraseña"
                    id="form2"
                    type="password"
                    value={pass}
                    onChange={handlePassChange}
                  />

                  <div className="text-center pt-1 mb-5 pb-1">
                    <MDBBtn
                      type="submit"
                      className="mb-4 w-100 gradient-custom-2"
                      style={{ width: '100%' }}
                    >
                      Entra!
                    </MDBBtn>
                    <a className="text-muted" href="#!">
                      Olvidaste tu contraseña?
                    </a>
                  </div>
                </form>

                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0">No tienes cuenta?</p>
                </div>
              </div>
            </MDBCol>

            <MDBCol col="6" className="mb-5">
              <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">Mucho más que eventos</h4>
                  <p className="small mb-0">
                    Vertex es una comunidad vibrante donde puedes conectar con
                    personas, compartir tus pasiones, y crear recuerdos
                    duraderos. Tanto si te gusta la música, el deporte, las
                    artes o la tecnología, hay para todos los gustos. Descubre
                    nuevas experiencias, haz amigos y forma parte de algo más
                    grande. Únete a Vertex y convierte cada momento en una
                    aventura. Tu próxima gran conexión está a un clic de
                    distancia.
                  </p>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
      <Footer />
    </>
  );
};

export default NewLogin;
