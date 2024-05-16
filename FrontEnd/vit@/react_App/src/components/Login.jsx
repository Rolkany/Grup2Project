import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import UserContext from './UserContext';
import Profile from './Profile';
import './Login.css';
import logo from './pepon.png';

const Login = () => {
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
        throw new Error('Fallo en el proceso de login');
      }
      //Recibimos la respuesta del servidor
      const dataResponse = await response.json();
      console.log('La respuesta es: ', dataResponse);
      const userId = dataResponse;
      setUserId(userId);
      setLoggedIn(true);
    } catch (error) {
      console.error('Error en el login: ', error.message);
    }
    //Logs
    console.log('email: ', email);
    console.log('pass: ', pass);
    console.log(userLogin);

    //Limpieza inputs
    setEmail('');
    setPass('');
  };

  return (
    <>
      {loggedIn ? (
        <Profile />
      ) : (
        <div className="login-container">
          <div className="login-logo">
            <img src={logo} />
          </div>
          <Form className="login-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="form-input"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="form-input"
                type="password"
                placeholder="Password"
                value={pass}
                onChange={handlePassChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="form-button" variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )}
    </>
  );
};

export default Login;
