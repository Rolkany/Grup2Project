import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import logo from "./image_Vertex.png";
import { Link } from "react-router-dom";
import "./NewHeader.css";

const NewHeader = () => {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img src={logo} height="30" alt="vertex Logo" loading="lazy" />
          <Link className="linkProfileHeader" to="/">
            Home
          </Link>
          <Link className="linkProfileHeader" to="/newperfil">
            Perfil
          </Link>
        </MDBNavbarBrand>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default NewHeader;
