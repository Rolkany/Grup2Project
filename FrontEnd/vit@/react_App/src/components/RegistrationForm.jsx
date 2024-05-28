import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden!');
      return;
    }
    // Lógica para el envío del formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="container">
      <img src="vertex_01.svg" width="120" alt="Logo" />
      <div className="container text-center">
        <form
          className="col-10 container d-flex flex-column"
          id="userForm"
          onSubmit={handleSubmit}
        >
          <h1 className="pb-2">Sign Up</h1>
          <label className="pt-2 text-left" htmlFor="username">
            Nombre de Usuario:
          </label>
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            placeholder="Ingresa Nombre de Usuario"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <label className="pt-2" htmlFor="email">
            Email:
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="pt-2" htmlFor="password">
            Contraseña:
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label className="pt-2" htmlFor="confirm-password">
            Confirmar Contraseña:
          </label>
          <input
            className="form-control"
            type="password"
            id="confirm-password"
            name="confirmPassword"
            placeholder="Confirma Contraseña"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button className="btn btn-primary mt-3" type="submit">
            Registrarse
          </button>
          <p className="pt-2">
            ¿Ya eres miembro?
            <Link to="/login">
              <strong> Inicia sesión</strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
