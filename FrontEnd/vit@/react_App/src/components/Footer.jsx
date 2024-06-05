import { MDBFooter } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <MDBFooter bgColor="light" className="text-center text-lg-left">
        <div className="text-center p-3" style={{ backgroundColor: "#f8f9fa" }}>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link className="text-dark" to="/quienessomos">
            Grupo2
          </Link>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
