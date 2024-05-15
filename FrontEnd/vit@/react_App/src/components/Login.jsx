import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
    } catch (error) {
      console.error('Error en el login: ', error.message);
    }
    //Aqui las variables se pueden enviar al servidor, en este caso haran match con el DTO de User
    console.log('email: ', email);
    console.log('pass: ', pass);
    console.log(userLogin);
    setEmail('');
    setPass('');
  };

  return (
    <>
      {/* <div className="containerlogo">
        <img
          src="../assets/vertex-01.svg"
          alt="logo"
          width="120px"
          className="mx-auto"
        />
      </div> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
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
            type="password"
            placeholder="Password"
            value={pass}
            onChange={handlePassChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
