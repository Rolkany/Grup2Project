import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Barra = () => {
  return (
    <Navbar expand="lg" className="bg-light p-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="text-primary fw-bold">
          Perfil
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-dark">
              Eventos
            </Nav.Link>
            <Nav.Link href="#link" className="text-dark">
              Link
            </Nav.Link>
            <NavDropdown
              title="Opciones"
              id="basic-nav-dropdown"
              className="text-dark"
            >
              <NavDropdown.Item href="#action/3.1" className="text-info">
                Editar perfil
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="text-info">
                Crear evento
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="text-danger">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Barra;
